/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect, useRef, useCallback } from "react";
import {
  FiCloud,
  FiWifi,
  FiServer,
  FiMonitor,
  FiCpu,
  FiDatabase,
  FiSend,
  FiRefreshCw,
  FiSliders,
  FiActivity,
} from "react-icons/fi";

const NODES = {
  cloud: {
    id: "cloud",
    label: "INTERNET_CLOUD",
    subLabel: "0.0.0.0/0",
    deviceName: "EXTERNAL WAN UPLINK",
    role: "WAN_GATEWAY",
    ip: "0.0.0.0 / 0",
    gateway: "BGP_AS64512 (ISP_CORE)",
    mac: "FF-FF-FF-00-8A-01",
    vlan: "EXTERNAL_WAN (UNTAGGED)",
    services: "Cloudflare Edge, DNSSEC, Zero-Trust Tunnel",
    state: "ONLINE",
    parent: null,
    x: 300,
    y: 58,
    accent: "neon",
    icon: FiCloud,
  },
  router: {
    id: "router",
    label: "CISCO_2911_ROUTER",
    subLabel: "192.168.1.1 (Gi0/0)",
    deviceName: "CISCO 2911 ISR EDGE ROUTER",
    role: "EDGE_ROUTER",
    ip: "192.168.1.1 / 24",
    gateway: "100.64.0.1 (WAN_NEXT_HOP)",
    mac: "00-0C-29-8F-4E-12",
    vlan: "802.1Q TRUNK (ALL_VLANS)",
    services: "NAT Overload, OSPF Routing, Stateful ACL",
    state: "ONLINE",
    parent: "cloud",
    x: 300,
    y: 168,
    accent: "purple",
    icon: FiWifi,
  },
  switch: {
    id: "switch",
    label: "CORE_SWITCH_2960",
    subLabel: "VLAN 10, 20, 30",
    deviceName: "CISCO CATALYST 2960-X CORE",
    role: "CORE_SWITCH",
    ip: "10.0.0.2 / 24",
    gateway: "192.168.1.1",
    mac: "00-1A-A1-9C-77-04",
    vlan: "VLAN 10, 20, 30 (TRUNK)",
    services: "Rapid-PVST+, Inter-VLAN Routing, Port-Sec",
    state: "ONLINE",
    parent: "router",
    x: 300,
    y: 278,
    accent: "violet",
    icon: FiServer,
  },
  lenovo: {
    id: "lenovo",
    label: "LENOVO_HOST",
    subLabel: "10.0.0.15 (VLAN 10)",
    deviceName: "LENOVO CREATOR WORKSTATION",
    role: "WORKSTATION",
    ip: "10.0.0.15 / 24",
    gateway: "10.0.0.1",
    mac: "00-1B-44-11-3A-B7",
    vlan: "VLAN 10 (STUDENT_DEV)",
    services: "Graphic Rendering, IDE, Local Packet Tracer",
    state: "ONLINE",
    parent: "switch",
    x: 110,
    y: 392,
    accent: "neon",
    icon: FiMonitor,
  },
  ai: {
    id: "ai",
    label: "AI_TEST_NODE",
    subLabel: "10.0.0.42 (VLAN 20)",
    deviceName: "NEURAL COMPUTE SANDBOX",
    role: "COMPUTE_NODE",
    ip: "10.0.0.42 / 24",
    gateway: "10.0.0.1",
    mac: "00-50-56-C0-00-08",
    vlan: "VLAN 20 (ML_SANDBOX)",
    services: "Local LLM Inference, Docker, Python ML",
    state: "ONLINE",
    parent: "switch",
    x: 300,
    y: 392,
    accent: "violet",
    icon: FiCpu,
  },
  db: {
    id: "db",
    label: "DB_GATEWAY",
    subLabel: "10.0.0.100 (VLAN 30)",
    deviceName: "PRIMARY DATA & VAULT NODE",
    role: "DATA_SERVER",
    ip: "10.0.0.100 / 24",
    gateway: "10.0.0.1",
    mac: "00-0D-3A-5B-91-E0",
    vlan: "VLAN 30 (SECURE_DATA)",
    services: "PostgreSQL 16, Redis Cache, TLS Secrets",
    state: "ONLINE",
    parent: "switch",
    x: 490,
    y: 392,
    accent: "accent",
    icon: FiDatabase,
  },
};

const CONNECTIONS = [
  ["cloud", "router"],
  ["router", "switch"],
  ["switch", "lenovo"],
  ["switch", "ai"],
  ["switch", "db"],
];

// Computes exact hop-by-hop waypoints across the topology tree
function getRoundTripRoute(sourceId, targetId) {
  if (sourceId === targetId) return [sourceId];

  const getAncestors = (id) => {
    const chain = [];
    let curr = id;
    while (curr) {
      chain.push(curr);
      curr = NODES[curr]?.parent;
    }
    return chain;
  };

  const sourceChain = getAncestors(sourceId);
  const targetChain = getAncestors(targetId);

  let lcaIndexSource = 0;
  let lcaIndexTarget = 0;

  for (let i = 0; i < sourceChain.length; i++) {
    const foundIdx = targetChain.indexOf(sourceChain[i]);
    if (foundIdx !== -1) {
      lcaIndexSource = i;
      lcaIndexTarget = foundIdx;
      break;
    }
  }

  const forward = [
    ...sourceChain.slice(0, lcaIndexSource + 1),
    ...targetChain.slice(0, lcaIndexTarget).reverse(),
  ];

  const backward = [...forward].reverse().slice(1);
  return [...forward, ...backward];
}

export default function NetworkArchitecture() {
  const [selectedNodeId, setSelectedNodeId] = useState("lenovo");
  const [targetNodeId, setTargetNodeId] = useState("router");
  const [autoPing, setAutoPing] = useState(true);
  const [activePackets, setActivePackets] = useState([]);
  const [pulsingNodeId, setPulsingNodeId] = useState(null);
  const [logs, setLogs] = useState([
    "> ICMP Ping Daemon initialized [AUTO-MODE].",
    "> Select any node to inspect config or dispatch ping.",
  ]);

  const packetsRef = useRef([]);
  const rafRef = useRef(null);
  const autoCycleRef = useRef(0);

  const appendLog = useCallback((line) => {
    setLogs((prev) => [...prev.slice(-4), line]);
  }, []);

  // Ensure target dropdown never equals selected source node
  useEffect(() => {
    if (targetNodeId === selectedNodeId) {
      const fallback = Object.keys(NODES).find((id) => id !== selectedNodeId);
      if (fallback) setTargetNodeId(fallback);
    }
  }, [selectedNodeId, targetNodeId]);

  const launchPing = useCallback(
    (sourceId, destId, isAuto = false) => {
      if (!sourceId || !destId || sourceId === destId) return;
      const route = getRoundTripRoute(sourceId, destId);
      if (route.length < 2) return;

      const targetNode = NODES[destId];
      const cleanIp = targetNode.ip.split(" ")[0];
      const latency = Math.floor(Math.random() * 6) + 1;

      const newPacket = {
        id: `${Date.now()}-${Math.random()}`,
        route,
        segmentIndex: 0,
        progress: 0,
        speed: 0.032,
        isAuto,
        destId,
        targetLabel: targetNode.label,
        targetIp: cleanIp,
        latency,
        halfwayTriggered: false,
      };

      packetsRef.current = [...packetsRef.current, newPacket];
      setActivePackets([...packetsRef.current]);
    },
    []
  );

  // Smooth 60fps packet animation loop
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (now) => {
      const dt = Math.min((now - lastTime) / 16.67, 2);
      lastTime = now;

      if (packetsRef.current.length > 0) {
        const updated = [];

        for (const pkt of packetsRef.current) {
          let nextProgress = pkt.progress + pkt.speed * dt;
          let nextSegment = pkt.segmentIndex;

          if (nextProgress >= 1) {
            nextProgress -= 1;
            nextSegment += 1;

            // Trigger arrival pulse at destination midpoint
            const midpointIndex = Math.floor((pkt.route.length - 1) / 2);
            if (nextSegment === midpointIndex && !pkt.halfwayTriggered) {
              pkt.halfwayTriggered = true;
              setPulsingNodeId(pkt.destId);
              setTimeout(() => setPulsingNodeId(null), 450);
            }
          }

          if (nextSegment < pkt.route.length - 1) {
            updated.push({
              ...pkt,
              segmentIndex: nextSegment,
              progress: nextProgress,
            });
          } else {
            // Packet completed round-trip
            const prefix = pkt.isAuto ? "[AUTO]" : "[ICMP]";
            appendLog(
              `> ${prefix} Reply from ${pkt.targetIp}: bytes=32 time=${pkt.latency}ms TTL=64`
            );
          }
        }

        packetsRef.current = updated;
        setActivePackets(updated);
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [appendLog]);

  // Automatic background ping scheduler
  useEffect(() => {
    if (!autoPing) return;

    // Initial ping shortly after mount
    const initialTimer = setTimeout(() => {
      launchPing(selectedNodeId, targetNodeId, true);
    }, 700);

    const interval = setInterval(() => {
      const otherNodes = Object.keys(NODES).filter((id) => id !== selectedNodeId);
      const nextTarget = otherNodes[autoCycleRef.current % otherNodes.length];
      autoCycleRef.current += 1;
      launchPing(selectedNodeId, nextTarget, true);
    }, 2600);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [autoPing, selectedNodeId, targetNodeId, launchPing]);

  const handleSimulateAll = () => {
    const otherNodes = Object.keys(NODES).filter((id) => id !== selectedNodeId);
    appendLog(`> Broadcasting ICMP Echo burst from ${NODES[selectedNodeId].label}...`);
    otherNodes.forEach((destId, idx) => {
      setTimeout(() => {
        launchPing(selectedNodeId, destId, false);
      }, idx * 180);
    });
  };

  const handleReset = () => {
    packetsRef.current = [];
    setActivePackets([]);
    setSelectedNodeId("lenovo");
    setTargetNodeId("router");
    setAutoPing(true);
    setLogs([
      "> Topology state reset. Telemetry buffers cleared.",
      "> ICMP Ping Daemon active [AUTO-MODE].",
    ]);
  };

  const selectedNode = NODES[selectedNodeId];
  const isPinging = activePackets.length > 0;

  const getAccentClasses = (accent, isSelected, isPulsing) => {
    const activeGlow = isSelected || isPulsing;
    switch (accent) {
      case "purple":
        return {
          box: activeGlow
            ? "border-purple bg-purple/20 shadow-[0_0_24px_rgba(147,51,234,0.45)]"
            : "border-purple/50 bg-midnight/90 hover:border-purple",
          icon: "text-purple",
          sub: "text-purple",
        };
      case "violet":
        return {
          box: activeGlow
            ? "border-violet bg-violet/20 shadow-[0_0_24px_rgba(139,92,246,0.45)]"
            : "border-violet/50 bg-midnight/90 hover:border-violet",
          icon: "text-violet",
          sub: "text-violet",
        };
      case "accent":
        return {
          box: activeGlow
            ? "border-accent bg-accent/20 shadow-[0_0_24px_rgba(168,85,247,0.45)]"
            : "border-accent/50 bg-midnight/90 hover:border-accent",
          icon: "text-accent",
          sub: "text-accent",
        };
      default:
        return {
          box: activeGlow
            ? "border-neon bg-neon/20 shadow-[0_0_24px_rgba(192,132,252,0.45)]"
            : "border-neon/50 bg-midnight/90 hover:border-neon",
          icon: "text-neon",
          sub: "text-neon",
        };
    }
  };

  return (
    <section
      className="max-w-7xl mx-auto px-4 md:px-12 py-28 text-white"
      id="network-architecture"
    >
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo/50 border border-violet/30 font-mono text-xs text-neon uppercase mb-3 tracking-wider">
            <FiActivity className="size-3.5 text-violet" />
            <span>INFRASTRUCTURE // LIVE TELEMETRY</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "PPSupplyMono" }}
          >
            Network Architecture &amp; Workstation Ecosystem
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2 font-mono">
            Click on any network node to inspect its IP configuration, routing table, VLANs, and live ping packets.
          </p>
        </div>

        {/* Top Right Action Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setAutoPing((prev) => !prev)}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              autoPing
                ? "bg-violet/15 border-violet/50 text-neon"
                : "bg-midnight border-white/10 text-neutral-400 hover:text-white"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                autoPing ? "bg-neon animate-ping" : "bg-neutral-600"
              }`}
            />
            <span>AUTO-PING: {autoPing ? "ON" : "OFF"}</span>
          </button>

          <button
            type="button"
            onClick={handleSimulateAll}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet hover:bg-purple text-white font-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all cursor-pointer"
          >
            <FiSend className="size-3.5" />
            <span>SIMULATE ALL PINGS</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-midnight hover:bg-indigo border border-white/10 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <FiRefreshCw className="size-3.5" />
            <span>RESET</span>
          </button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT PANEL: Interactive Topology Diagram (7 cols) */}
        <div className="lg:col-span-7 grid-black-color flex flex-col justify-between !p-5 sm:!p-6 shadow-2xl">
          {/* Top Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-primary/80 border border-white/5 font-mono text-xs">
            <span className="text-neutral-400">
              TOPOLOGY: <span className="text-white">2960-SWITCH / 2911-ROUTER</span>
            </span>
            <span className="text-neon flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              PACKET SIMULATION: {isPinging ? "ACTIVE" : "READY"}
            </span>
          </div>

          {/* Interactive SVG + Node Canvas */}
          <div className="relative w-full h-[450px] my-4 select-none">
            {/* SVG Connections & Traveling Ping Packets */}
            <svg
              viewBox="0 0 600 450"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <defs>
                <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Dashed Topology Links */}
              {CONNECTIONS.map(([fromId, toId]) => {
                const from = NODES[fromId];
                const to = NODES[toId];
                const isHighlighted =
                  selectedNodeId === fromId || selectedNodeId === toId;

                return (
                  <line
                    key={`${fromId}-${toId}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isHighlighted ? "#c084fc" : "#8b5cf6"}
                    strokeOpacity={isHighlighted ? 0.65 : 0.3}
                    strokeWidth={isHighlighted ? 2.2 : 1.6}
                    strokeDasharray="6 6"
                  />
                );
              })}

              {/* Animated Ping Packets */}
              {activePackets.map((pkt) => {
                const from = NODES[pkt.route[pkt.segmentIndex]];
                const to = NODES[pkt.route[pkt.segmentIndex + 1]];
                if (!from || !to) return null;

                const cx = from.x + (to.x - from.x) * pkt.progress;
                const cy = from.y + (to.y - from.y) * pkt.progress;

                return (
                  <g key={pkt.id} filter="url(#packetGlow)">
                    <circle cx={cx} cy={cy} r="7" fill="#8b5cf6" fillOpacity="0.35" />
                    <circle cx={cx} cy={cy} r="3.8" fill="#c084fc" />
                    <circle cx={cx} cy={cy} r="1.8" fill="#ffffff" />
                  </g>
                );
              })}
            </svg>

            {/* Clickable Network Nodes */}
            {Object.values(NODES).map((node) => {
              const IconComponent = node.icon;
              const isSelected = selectedNodeId === node.id;
              const isPulsing = pulsingNodeId === node.id;
              const styles = getAccentClasses(node.accent, isSelected, isPulsing);

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNodeId(node.id)}
                  style={{
                    left: `${(node.x / 600) * 100}%`,
                    top: `${(node.y / 450) * 100}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer focus:outline-none z-10"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 backdrop-blur-md ${
                      styles.box
                    } ${isPulsing ? "scale-110" : "group-hover:scale-105"}`}
                  >
                    <IconComponent className={`size-5 sm:size-6 ${styles.icon}`} />
                  </div>

                  <div className="mt-2 text-center bg-primary/85 px-2 py-0.5 rounded-md border border-white/5 backdrop-blur-sm">
                    <span className="block font-mono text-[10px] sm:text-xs font-bold tracking-wider text-white whitespace-nowrap">
                      {node.label}
                    </span>
                    <span
                      className={`block font-mono text-[9px] sm:text-[10px] whitespace-nowrap ${styles.sub}`}
                    >
                      {node.subLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Inspection Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 rounded-xl bg-primary/90 border border-white/5 font-mono text-xs">
            <span className="text-neutral-300 truncate">
              &gt; Inspecting{" "}
              <strong className="text-white">{selectedNode.deviceName}</strong> (
              {selectedNode.ip})
            </span>
            <span className="text-neon font-bold tracking-wider">READY</span>
          </div>
        </div>

        {/* RIGHT PANEL: Node Config Inspector (5 cols) */}
        <div className="lg:col-span-5 grid-black-color flex flex-col justify-between !p-6 shadow-2xl">
          <div>
            {/* Inspector Header */}
            <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <FiSliders className="size-5 text-violet" />
                <h3
                  className="text-lg sm:text-xl font-bold tracking-tight text-white"
                  style={{ fontFamily: "PPSupplyMono" }}
                >
                  Node Config Inspector
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-violet/15 border border-violet/40 font-mono text-[10px] text-neon uppercase tracking-widest">
                {selectedNode.role}
              </span>
            </div>

            {/* Key-Value Configuration Rows */}
            <div className="divide-y divide-white/5 font-mono text-xs my-2">
              <div className="py-3 flex justify-between gap-4">
                <span className="text-neutral-400 shrink-0">Device Name:</span>
                <span className="text-white font-bold text-right">
                  {selectedNode.deviceName}
                </span>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <span className="text-neutral-400 shrink-0">IP Address:</span>
                <span className="text-neon font-medium text-right">
                  {selectedNode.ip}
                </span>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <span className="text-neutral-400 shrink-0">Default Gateway:</span>
                <span className="text-violet font-medium text-right">
                  {selectedNode.gateway}
                </span>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <span className="text-neutral-400 shrink-0">MAC Address:</span>
                <span className="text-neutral-200 text-right">
                  {selectedNode.mac}
                </span>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <span className="text-neutral-400 shrink-0">VLAN Assignment:</span>
                <span className="text-accent font-medium text-right">
                  {selectedNode.vlan}
                </span>
              </div>

              <div className="py-3 flex justify-between gap-4">
                <span className="text-neutral-400 shrink-0">Services Running:</span>
                <span className="text-emerald-400 text-right leading-relaxed">
                  {selectedNode.services}
                </span>
              </div>

              <div className="py-3 flex items-center justify-between gap-4">
                <span className="text-neutral-400 shrink-0">State:</span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-wider">
                  {selectedNode.state}
                </span>
              </div>
            </div>
          </div>

          {/* ICMP Echo Ping Utility */}
          <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
            <label
              htmlFor="ping-target-select"
              className="block font-mono text-xs text-neutral-400"
            >
              ICMP Echo Target Destination:
            </label>

            <div className="flex items-center gap-2.5">
              <select
                id="ping-target-select"
                value={targetNodeId}
                onChange={(e) => setTargetNodeId(e.target.value)}
                className="flex-1 h-10 px-3 rounded-xl bg-midnight border border-white/10 focus:border-violet focus:outline-none font-mono text-xs text-white cursor-pointer"
              >
                {Object.values(NODES)
                  .filter((n) => n.id !== selectedNodeId)
                  .map((node) => (
                    <option key={node.id} value={node.id} className="bg-midnight text-white">
                      {node.label} ({node.ip.split(" ")[0]})
                    </option>
                  ))}
              </select>

              <button
                type="button"
                onClick={() => launchPing(selectedNodeId, targetNodeId, false)}
                className="h-10 px-5 rounded-xl bg-violet hover:bg-purple text-white font-mono text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                PING
              </button>
            </div>

            {/* Live ICMP Terminal Output */}
            <div className="p-3.5 rounded-xl bg-primary border border-white/5 font-mono text-[11px] leading-relaxed text-emerald-400 min-h-[96px] flex flex-col justify-end space-y-1">
              {logs.map((entry, idx) => (
                <div key={idx} className="truncate">
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { FiTerminal, FiCloud, FiShield, FiCpu } from "react-icons/fi";

const SPECIALIZATIONS = [
  {
    id: "devsecops",
    pid: "PID_101",
    title: "DevSecOps & Cloud Infrastructure",
    summary:
      "Automating hardened CI/CD pipelines, containerized workloads, and resilient cloud environments with security baked into every deployment stage.",
    tags: ["CI/CD Security", "Linux & Docker", "Cloud Architecture"],
    icon: FiCloud,
  },
  {
    id: "appsec",
    pid: "PID_102",
    title: "Application Security & Network Engineering",
    summary:
      "Designing segmented VLAN/OSPF topologies, stateful firewall policies, and defensive application architectures against modern attack vectors.",
    tags: ["AppSec & OWASP", "Cisco IOS / VLANs", "Zero-Trust ACLs"],
    icon: FiShield,
  },
  {
    id: "distributed",
    pid: "PID_103",
    title: "Distributed Systems & Web3 DApps",
    summary:
      "Engineering fault-tolerant backend microservices, high-throughput APIs, and decentralized Web3 applications built for scale.",
    tags: ["Microservices", "Smart Contracts", "Scalable APIs"],
    icon: FiCpu,
  },
];

export default function RolesSection() {
  const [activeId, setActiveId] = useState("devsecops");

  return (
    <section
      id="roles"
      className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16 text-white"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-midnight border border-violet/30 font-mono text-xs text-neutral-300 uppercase mb-3">
            <FiTerminal className="size-3.5 text-violet" />
            <span>ACTIVE_SPECIALIZATION_DAEMON</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase"
            style={{ fontFamily: "PPSupplyMono" }}
          >
            Core Roles &amp; Domains
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 font-mono text-xs text-neon">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
          </span>
          <span>3 DAEMONS RUNNING</span>
        </div>
      </div>

      {/* 3-Column Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SPECIALIZATIONS.map((role) => {
          const IconComponent = role.icon;
          const isActive = activeId === role.id;

          return (
            <div
              key={role.id}
              onClick={() => setActiveId(role.id)}
              onMouseEnter={() => setActiveId(role.id)}
              className={`group relative rounded-2xl p-6 sm:p-7 bg-gradient-to-b from-midnight via-[#10111a] to-primary border transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden ${
                isActive
                  ? "border-violet/70 shadow-[0_12px_40px_rgba(139,92,246,0.18)] -translate-y-1"
                  : "border-white/10 hover:border-violet/40"
              }`}
            >
              {/* Top Luminous Accent Bar */}
              <div
                className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neon to-transparent transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                }`}
              />

              <div>
                {/* Card Top Bar: Icon & Process Status */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-violet/20 border-violet/50 text-neon"
                        : "bg-indigo/70 border-white/10 text-violet group-hover:text-neon"
                    }`}
                  >
                    <IconComponent className="size-5" />
                  </div>

                  <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-primary/90 border border-white/5 font-mono text-[10px] tracking-wider">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-neon animate-pulse" : "bg-emerald-400"
                      }`}
                    />
                    <span className={isActive ? "text-neon" : "text-neutral-400"}>
                      {role.pid} // {isActive ? "ACTIVE" : "ONLINE"}
                    </span>
                  </div>
                </div>

                {/* Role Title & Description */}
                <h3
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-neon transition-colors leading-snug mb-3"
                  style={{ fontFamily: "PPSupplyMono" }}
                >
                  {role.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {role.summary}
                </p>
              </div>

              {/* Bottom Capability Tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-indigo/60 border border-white/5 font-mono text-[10px] text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
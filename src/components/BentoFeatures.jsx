import { FiShield, FiCpu, FiTerminal, FiDatabase, FiLock, FiActivity } from "react-icons/fi";

export default function BentoFeatures() {
  return (
    <section className="relative w-full py-32 px-4 md:px-12 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/40 border border-violet/30 font-mono text-xs text-neutral-300 uppercase mb-4 tracking-wider">
            <FiActivity className="text-violet" />
            <span>ARCHITECTURE // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-bold tracking-tight mb-4">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">Performance & Scale</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base font-sans">
            Combining rigorous software design, high-throughput systems, and zero-trust security architecture.
          </p>
        </div>

        {/* Bento Grid Layout matching the reference design */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: System Telemetry / Live Graph (Dark Glass Theme) */}
          <div className="lg:col-span-1 rounded-3xl bg-gradient-to-b from-[#131527] to-[#0a0c18] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 mb-8">
              <h3 className="text-lg font-mono font-bold text-white mb-1">System Telemetry</h3>
              <p className="text-xs text-neutral-400">Real-time throughput and server health analysis.</p>
              
              <div className="mt-6">
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-tight">$9,850,28</span>
                <span className="text-xs font-mono text-neon ml-2">99.9% Uptime</span>
              </div>

              {/* Simulated Chart Container */}
              <div className="mt-4 p-3 rounded-2xl bg-midnight/60 border border-white/5 flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-indigo/50 flex items-center justify-center">
                  <FiCpu className="text-neon size-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-white">Node_Cluster_01</div>
                  <div className="text-[10px] font-mono text-neutral-400">14ms latency</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/5 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-neutral-300 py-1 border-b border-white/5">
                <span>Active Core Pipeline</span>
                <span className="text-neon">ONLINE</span>
              </div>
              <div className="flex justify-between text-neutral-300 py-1">
                <span>Database Sync (EER)</span>
                <span className="text-violet">SECURE</span>
              </div>
            </div>
          </div>

          {/* Card 2: Global Security Radar / Network Nodes */}
          <div className="lg:col-span-2 rounded-3xl bg-[#090b14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-md relative z-10 mb-8">
              <h3 className="text-xl font-mono font-bold text-white mb-2">Zero-Trust Global Defense</h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Protecting distributed software architectures with automated threat detection, encrypted nodes, and hard-coded security measures.
              </p>
            </div>

            {/* Radar / Node UI graphic placeholder matching reference */}
            <div className="relative z-10 w-full h-48 rounded-2xl bg-midnight/40 border border-white/5 flex items-center justify-center overflow-hidden">
              {/* Concentric rings */}
              <div className="absolute w-72 h-72 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full border border-violet/30 flex items-center justify-center bg-violet/10">
                    <FiShield className="text-neon size-6 animate-pulse" />
                  </div>
                </div>
              </div>
              {/* Floating Node Badges */}
              <div className="absolute top-4 left-6 px-3 py-1.5 rounded-lg bg-midnight border border-white/10 font-mono text-[10px] text-neutral-300 flex items-center gap-2">
                <FiTerminal className="text-violet" /> API Gateway
              </div>
              <div className="absolute bottom-4 right-6 px-3 py-1.5 rounded-lg bg-midnight border border-white/10 font-mono text-[10px] text-neutral-300 flex items-center gap-2">
                <FiDatabase className="text-neon" /> EER Database
              </div>
            </div>
          </div>

          {/* Card 3: AI Code & Automated Reports */}
          <div className="lg:col-span-1 rounded-3xl bg-[#090b14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-mono font-bold text-white mb-2">AI-Driven Efficiency</h3>
              <p className="text-xs text-neutral-400 mb-6">Automated code scaffolding, testing matrices, and documentation generation.</p>
              
              {/* Metric Gauge representation */}
              <div className="p-4 rounded-2xl bg-midnight/80 border border-white/5 text-center mb-6">
                <span className="text-2xl font-mono font-bold text-neon block mb-1">94.8%</span>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Automation Efficiency</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-400">
              <span>Model Status</span>
              <span className="text-violet">OPTIMIZED</span>
            </div>
          </div>

          {/* Card 4: Architecture Automation Control Panel */}
          <div className="lg:col-span-1 rounded-3xl bg-[#090b14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-mono font-bold text-white mb-2">Workflow & Swimlanes</h3>
              <p className="text-xs text-neutral-400 mb-6">Seamless orchestration across administrators, guides, operators, and clients.</p>

              <div className="space-y-3 mb-6">
                <div className="p-3 rounded-xl bg-midnight/60 border border-white/5 flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-300">Target Role</span>
                  <span className="text-neon">Administrator</span>
                </div>
                <div className="p-3 rounded-xl bg-violet/10 border border-violet/30 text-center font-mono text-xs text-neon py-2.5">
                  Execute Pipeline
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              System Control v2.4
            </div>
          </div>

          {/* Card 5: Security Lock & Encryption Module */}
          <div className="lg:col-span-1 rounded-3xl bg-[#090b14] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-lg font-mono font-bold text-white mb-2">Hard-Coded Security</h3>
              <p className="text-xs text-neutral-400 mb-6">Protecting data structures and assets with industry-leading encryption parameters.</p>

              <div className="p-6 rounded-2xl bg-midnight/80 border border-white/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-violet/10 via-neon/10 to-transparent opacity-50" />
                <div className="w-12 h-12 rounded-xl bg-indigo/60 border border-white/10 flex items-center justify-center relative z-10 shadow-lg">
                  <FiLock className="text-neon size-6" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs">
              <span className="text-neutral-400">Encryption Level</span>
              <span className="text-neon">AES-256</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
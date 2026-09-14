/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FiTerminal, FiShield, FiCpu, FiActivity, FiArrowUpRight } from "react-icons/fi";

const pillars = [
  {
    id: "01",
    title: "AI-Augmented Code Generation",
    tag: "// AI EFFICIENCY",
    icon: <FiCpu className="text-neon size-5" />,
    description: "Accelerating full-stack development life cycles using advanced LLM pipelines, automated testing matrices, and smart scaffolding to eliminate friction.",
    // Abstract mesh gradient design styling (Simulated via CSS gradients & shapes)
    abstractType: "lightning",
    gradientBg: "from-rose-500 via-purple-600 to-amber-400",
  },
  {
    id: "02",
    title: "Zero-Trust Cyber Operations",
    tag: "// SECURITY & OPS",
    icon: <FiShield className="text-violet size-5" />,
    description: "Architecting resilient digital infrastructure with hard-coded vulnerability assessments, penetration testing vectors, and automated threat mitigations.",
    abstractType: "eclipse",
    gradientBg: "from-amber-600 via-rose-900 to-blue-950",
  },
  {
    id: "03",
    title: "Distributed SaaS Architecture",
    tag: "// SCALABILITY",
    icon: <FiTerminal className="text-neon size-5" />,
    description: "Building high-throughput microservices and enterprise applications designed to scale seamlessly under heavy concurrent workloads.",
    abstractType: "pyramid",
    gradientBg: "from-amber-400 via-rose-600 to-violet-900",
  },
  {
    id: "04",
    title: "Global Intelligence & Systems",
    tag: "// ENTERPRISE",
    icon: <FiActivity className="text-violet size-5" />,
    description: "Uniting complex data models, secure databases, and modern web frameworks into a unified, high-performing operational environment.",
    abstractType: "chevron",
    gradientBg: "from-amber-500 via-rose-500 to-violet-600",
  },
];

export default function EcosystemMatrix() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full py-32 px-4 md:px-12 bg-midnight overflow-hidden text-white">
      {/* Background Grid Pattern & Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo/40 border border-violet/30 font-mono text-xs text-neutral-300 uppercase mb-4 tracking-wider">
              <FiActivity className="text-violet" />
              <span>MISSION_CONTROL // ECOSYSTEM</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-mono font-bold tracking-tight leading-tight">
              We've orchestrated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-neon to-white">
                Intelligence & Security.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-sans mb-6">
              Leaving Nadir brings clarity, not complexity—uniting software architecture, rigorous cyber-defense, and AI efficiency into adaptive systems that scale.
            </p>
            <a
              href="../Projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-midnight border border-white/10 hover:border-violet/50 font-mono text-xs uppercase tracking-wider text-neutral-200 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Architecture</span>
              <FiArrowUpRight className="size-4 text-neon" />
            </a>
          </div>
        </div>

        {/* Interactive Card Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative rounded-3xl p-6 sm:p-8 transition-colors duration-300 flex flex-col justify-between cursor-pointer border backdrop-blur-xl h-full ${
                  isActive
                    ? "bg-midnight/90 border-violet/50 shadow-2xl shadow-violet/10"
                    : "bg-midnight/40 border-white/5 hover:border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-neutral-500 tracking-widest">
                      {pillar.id}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-indigo/40 border border-white/5 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                  </div>

                  {/* Abstract Glassmorphic Squircle Card with Glowing Gradient Shapes */}
                  <div className="relative w-full h-36 mb-6 rounded-2xl bg-[#090a16] border border-white/10 overflow-hidden flex items-center justify-center p-4 shadow-inner">
                    {/* Inner Ambient Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${pillar.gradientBg} opacity-20 blur-xl`} />
                    
                    {/* Abstract Rendered Shape depending on type */}
                    <div className="relative z-10 w-24 h-24 flex items-center justify-center">
                      {pillar.abstractType === "lightning" && (
                        <div className="w-16 h-20 bg-gradient-to-t from-amber-300 via-rose-500 to-purple-600 rounded-xl transform rotate-12 filter blur-[1px] shadow-[0_0_25px_rgba(244,63,94,0.6)]" style={{ clipPath: "polygon(50% 0%, 0% 60%, 40% 60%, 20% 100%, 100% 40%, 60% 40%)" }} />
                      )}
                      {pillar.abstractType === "eclipse" && (
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-500 via-amber-500 to-transparent relative overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                          <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full bg-[#090a16]" />
                        </div>
                      )}
                      {pillar.abstractType === "pyramid" && (
                        <div className="w-0 h-0 border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent border-b-[60px] border-b-amber-400 filter drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] transform rotate-6" />
                      )}
                      {pillar.abstractType === "chevron" && (
                        <div className="w-20 h-16 bg-gradient-to-r from-amber-400 via-rose-500 to-violet-600 rounded-xl transform -rotate-12 filter blur-[0.5px] shadow-[0_0_25px_rgba(236,72,153,0.6)]" style={{ clipPath: "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)" }} />
                      )}
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase text-violet tracking-wider block mb-2">
                    {pillar.tag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-mono font-bold text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-xs text-neutral-500">
                  <span>STATUS</span>
                  <span className={isActive ? "text-neon" : "text-neutral-500"}>
                    {isActive ? "ACTIVE_NODE" : "STANDBY"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
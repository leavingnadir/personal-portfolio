/* eslint-disable react/jsx-no-comment-textnodes */
import { FiStar, FiLayers, FiAward, FiGlobe, FiActivity } from "react-icons/fi";

const COUNTRIES = [
  { code: "us", name: "USA" },
  { code: "de", name: "Germany" },
  { code: "lk", name: "Sri Lanka" },
  { code: "au", name: "Australia" },
  { code: "pl", name: "Poland" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-8 py-20" id="stats">
      {/* Ambient Violet & Purple Backlight */}
      <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-44 bg-gradient-to-r from-violet/15 via-purple/20 to-neon/15 blur-[100px] pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="relative z-10 w-full rounded-3xl bg-gradient-to-b from-midnight/95 via-[#0f1019]/95 to-primary/95 border border-white/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.65)] overflow-hidden">
        
        {/* Subtle Dot-Matrix Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(192,132,252,0.09)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        {/* Top Luminous Edge Line */}
        <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-neon/70 to-transparent pointer-events-none" />

        {/* Top Telemetry Status Bar */}
        <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 py-3.5 border-b border-white/5 bg-primary/60 font-mono text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <FiActivity className="size-3.5 text-violet" />
            <span className="tracking-widest uppercase">TRACK_RECORD // METRICS</span>
          </div>
          <div className="flex items-center gap-2 text-neon">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
            </span>
            <span className="tracking-wider uppercase">GLOBAL_REACH</span>
          </div>
        </div>

        {/* Metrics Grid Wrapper with Corner Tech Brackets */}
        <div className="relative z-10">
          <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-violet/60 rounded-tl-sm pointer-events-none" />
          <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-violet/60 rounded-tr-sm pointer-events-none" />
          <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-violet/60 rounded-bl-sm pointer-events-none" />
          <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-violet/60 rounded-br-sm pointer-events-none" />

          {/* 4-Column Divided Metrics Grid (Top-Aligned Baselines) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
            
            {/* Stat 1: Years Experience */}
            <div className="group relative flex flex-col items-center justify-start text-center px-6 pt-11 pb-10 hover:bg-violet/[0.04] transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo/80 border border-white/10 group-hover:border-violet/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center mb-5 transition-all duration-300">
                <FiStar className="size-5 text-neon group-hover:scale-110 transition-transform" />
              </div>

              <span
                className="text-4xl sm:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon tracking-tight leading-none mb-3 transition-all"
                style={{ fontFamily: "PPSupplyMono" }}
              >
                2+
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">
                Years Experience
              </span>

              <div className="absolute bottom-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Stat 2: Completed Projects */}
            <div className="group relative flex flex-col items-center justify-start text-center px-6 pt-11 pb-10 hover:bg-violet/[0.04] transition-all duration-300 sm:border-l sm:border-white/10 lg:border-l-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo/80 border border-white/10 group-hover:border-violet/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center mb-5 transition-all duration-300">
                <FiLayers className="size-5 text-neon group-hover:scale-110 transition-transform" />
              </div>

              <span
                className="text-4xl sm:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon tracking-tight leading-none mb-3 transition-all"
                style={{ fontFamily: "PPSupplyMono" }}
              >
                25+
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">
                Completed Projects
              </span>

              <div className="absolute bottom-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Stat 3: Happy Clients */}
            <div className="group relative flex flex-col items-center justify-start text-center px-6 pt-11 pb-10 hover:bg-violet/[0.04] transition-all duration-300 sm:border-t sm:border-white/10 lg:border-t-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo/80 border border-white/10 group-hover:border-violet/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center mb-5 transition-all duration-300">
                <FiAward className="size-5 text-neon group-hover:scale-110 transition-transform" />
              </div>

              <span
                className="text-4xl sm:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon tracking-tight leading-none mb-3 transition-all"
                style={{ fontFamily: "PPSupplyMono" }}
              >
                19+
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">
                Happy Clients
              </span>

              <div className="absolute bottom-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Stat 4: Countries Worked With (Flags-Only UI) */}
            <div className="group relative flex flex-col items-center justify-start text-center px-6 pt-11 pb-10 hover:bg-violet/[0.04] transition-all duration-300 sm:border-t sm:border-l sm:border-white/10 lg:border-t-0 lg:border-l-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo/80 border border-white/10 group-hover:border-violet/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center justify-center mb-5 transition-all duration-300">
                <FiGlobe className="size-5 text-neon group-hover:scale-110 transition-transform" />
              </div>

              <span
                className="text-4xl sm:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neon tracking-tight leading-none mb-3 transition-all"
                style={{ fontFamily: "PPSupplyMono" }}
              >
                5
              </span>

              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400 group-hover:text-neutral-200 transition-colors">
                Countries Worked With
              </span>

              {/* Circular Flag-Only Dock */}
              <div className="mt-4 inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-primary/80 border border-white/10 group-hover:border-violet/40 transition-colors">
                <div className="flex items-center -space-x-1.5 group-hover:space-x-1.5 transition-all duration-300">
                  {COUNTRIES.map((country) => (
                    <div
                      key={country.code}
                      title={country.name}
                      className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-midnight border border-white/20 hover:scale-125 hover:z-10 hover:border-neon transition-all duration-200 shadow-md"
                    >
                      <img
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={country.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-10 h-[2px] bg-gradient-to-r from-transparent via-violet to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
/* eslint-disable react/jsx-no-comment-textnodes */
import { awardsData } from "../constants";

const rankStyles = {
  1: {
    accent: "text-violet border-violet/50 bg-violet/10 shadow-[0_0_25px_rgba(139,92,246,0.3)]",
    glow: "from-violet/20 via-transparent to-transparent",
    badgeLabel: "1ST PLACE",
  },
  2: {
    accent: "text-neon border-violet/30 bg-indigo/50 shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    glow: "from-indigo/20 via-transparent to-transparent",
    badgeLabel: "2ND PLACE",
  },
  3: {
    accent: "text-neutral-300 border-white/10 bg-midnight",
    glow: "from-white/5 via-transparent to-transparent",
    badgeLabel: "3RD PLACE",
  },
};

export default function Awards() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 mb-20 relative mt-10" id="awards">
      <div className="c-space">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
            // ACHIEVEMENTS & MILESTONES
          </span>
          <h2 className="text-heading text-white">Honors & Awards</h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-5">
          {awardsData.map((award) => {
            const style = rankStyles[award.place] || rankStyles[3];

            return (
              <div
                key={award.id}
                className="group relative pt-10 pb-8 px-6 rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Dynamic background glow based on rank */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Prominent Rank Display */}
                <div className="relative z-10 w-full mb-6">
                  <div className={`inline-flex flex-col items-center justify-center w-24 h-24 mx-auto rounded-2xl border ${style.accent} transition-transform duration-300 group-hover:scale-105`}>
                    <span className="font-mono text-3xl font-bold tracking-tight">
                      0{award.place}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest uppercase mt-0.5 opacity-80">
                      {style.badgeLabel}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="relative z-10 w-full">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo border border-white/10 font-mono text-xs mb-3 text-neon">
                    {award.category}
                  </span>

                  <h3 className="text-lg font-mono font-medium text-white mb-3 group-hover:text-neon transition-colors leading-relaxed">
                    {award.competition}
                  </h3>

                  <div className="pt-4 border-t border-white/5 mt-2">
                    <span className="subtext text-neutral-400 font-mono text-xs tracking-wider">
                      YEAR: {award.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
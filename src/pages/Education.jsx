/* eslint-disable react/jsx-no-comment-textnodes */
import { educationData } from "../constants";

export default function Education() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 mb-20 relative mt-10" id="education">
      <div className="c-space">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
            // ACADEMIC BACKGROUND
          </span>
          <h2 className="text-heading text-white">Education</h2>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-5">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="group relative p-6 md:p-8 rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-15">
                {/* Header: University Logo & Timeline Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-indigo/80 border border-white/10 p-2 flex items-center justify-center shrink-0 group-hover:border-violet/40 transition-colors">
                    <img
                      src={edu.logo}
                      alt={edu.university}
                      className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-md bg-indigo border border-white/10 font-mono text-xs text-neutral-300">
                    {edu.year}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="mb-6">
                  <h3 className="text-lg font-mono font-medium text-white mb-2 group-hover:text-neon transition-colors leading-snug">
                    {edu.degree}
                  </h3>
                  <p className="text-violet font-mono text-xs tracking-wider uppercase">
                    {edu.university}
                  </p>
                </div>
              </div>

              {/* Result / GPA Tag Footer */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500 uppercase">Status / CGPA:</span>
                <span className="text-neon bg-indigo/60 px-2.5 py-1 rounded border border-white/5">
                  {edu.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
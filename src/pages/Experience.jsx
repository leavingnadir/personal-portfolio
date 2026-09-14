/* eslint-disable react/jsx-no-comment-textnodes */
import { experiences } from "../constants";

const Experience = () => {
  return (
    <section className="px-4 md:px-8 py-24 mx-auto max-w-[1280px] relative mt-10" id="experience">
      <div className="c-space max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
            // CAREER TIMELINE & LOGS
          </span>
          <h2 className="text-heading text-white">Work Experience</h2>
        </div>

        {/* Timeline Container with Center/Side Neon Line */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id || index} className="relative pl-8 md:pl-12 group">
              
              {/* Glowing Timeline Node Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-midnight border-2 border-violet flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="relative p-6 md:p-8 rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                
                {/* Subtle background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Header: Role & Timeline Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 relative z-10">
                  <h3 className="text-xl font-mono font-medium text-white group-hover:text-neon transition-colors">
                    {exp.title}
                  </h3>
                  <span className="px-3 py-1 rounded-md bg-indigo border border-white/10 font-mono text-xs text-neutral-300 w-fit">
                    {exp.date}
                  </span>
                </div>

                {/* Company / Job Position */}
                <p className="text-violet font-mono text-xs tracking-wider uppercase mb-6 relative z-10">
                  {exp.job}
                </p>

                {/* Tasks List */}
                <ul className="space-y-3 text-neutral-300 text-sm md:text-base font-normal relative z-10">
                  {exp.contents.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3">
                      <span className="text-violet mt-1 font-mono text-xs">→</span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
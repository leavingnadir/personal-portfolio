/* eslint-disable react/jsx-no-comment-textnodes */
import { publications } from "../constants";

const Publications = () => {
  return (
    <section className="w-full py-24 px-4 mb-20 mt-10 text-white relative" id="publications">
      <div className="c-space max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
            // RESEARCH & ARTICLES
          </span>
          <h2 className="text-heading text-white">Publications</h2>
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 md:p-8 rounded-2xl bg-midnight border border-white/5 hover:border-violet/50 shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-indigo border border-white/10 text-neon font-mono text-xs">
                      {pub.platform}
                    </span>
                    <span className="text-neutral-500 font-mono text-xs">
                      {pub.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-mono font-medium mb-3 text-white group-hover:text-neon transition-colors">
                    {pub.title}
                  </h3>

                  <p className="subtext text-neutral-400 text-sm mb-6 line-clamp-3">
                    {pub.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-violet font-mono text-xs tracking-wider uppercase pt-4 border-t border-white/5">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Read Publication →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
/* eslint-disable react/jsx-no-comment-textnodes */
import { certifications } from "../constants";

const Certifications = () => {
  return (
    <section className="py-24 max-w-6xl mx-auto px-4 mb-20 relative mt-10" id="certifications">
      <div className="c-space">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-violet uppercase tracking-widest text-xs font-mono block mb-3">
            // ACCREDITATIONS & CREDENTIALS
          </span>
          <h2 className="text-heading text-white">Certifications</h2>
        </div>

        {/* Cyber-Matrix Console Container */}
        <div className="relative rounded-3xl bg-midnight border border-white/10 p-6 sm:p-10 shadow-2xl overflow-hidden">
          
          {/* Subtle background circuit-like ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo/20 rounded-full blur-3xl pointer-events-none" />

          {/* Console Header Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/5 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet animate-pulse" />
              <span>SECURE_CREDENTIAL_MATRIX.LOG</span>
            </div>
            <span className="text-neon tracking-widest">TOTAL: [{certifications.length}]</span>
          </div>

          {/* Certifications Grid (5 Columns on Large Screens) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6 relative z-10">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-5 rounded-2xl bg-indigo/30 border border-white/5 hover:border-violet/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center justify-start"
              >
                {/* Internal Card Hover Flash */}
                <div className="absolute inset-0 bg-violet/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />

                {/* Large Logo Frame Sized for 5-Column Grid */}
                <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex justify-center items-center bg-primary/60 rounded-xl p-3 border border-white/5 group-hover:border-violet/30 transition-colors mt-1 mb-3.5 shrink-0">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain filter brightness-90 group-hover:brightness-100 transition-all"
                  />
                </div>
            
                {/* Title Anchored to Top of Text Area with Trailing Space */}
                <div className="relative z-10 w-full flex items-start justify-center pb-2">
                  <p className="text-[11px] sm:text-xs font-mono text-neutral-300 group-hover:text-neon transition-colors leading-snug">
                    {cert.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
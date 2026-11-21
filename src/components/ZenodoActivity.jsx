/* eslint-disable react/jsx-no-comment-textnodes */
import { FiBookOpen, FiFileText, FiEye, FiDownload, FiAward, FiArrowUpRight } from "react-icons/fi";

export default function ZenodoActivity() {
  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16 text-white"
      id="zenodo-research"
    >
      {/* Main Research Card */}
      <div className="grid-black-color relative w-full overflow-hidden flex flex-col lg:flex-row gap-10 justify-between items-center !p-8 sm:!p-10 shadow-2xl">
        
        {/* Background Watermark */}
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
          <FiBookOpen className="w-[400px] h-[400px]" />
        </div>

        {/* Left Side: Info & Research Metrics */}
        <div className="relative z-10 w-full lg:w-3/4 space-y-8">
          
          {/* Title Area */}
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <FiBookOpen className="size-8 text-neon" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Research &amp; Publications
              </h3>
              <span className="px-2.5 py-0.5 rounded-full bg-violet/15 border border-violet/30 font-mono text-[10px] uppercase tracking-widest text-neon">
                ZENODO // OPEN_ACCESS
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm font-mono">// Peer-accessible technical papers &amp; security research indexed on Zenodo</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Stat 1: Published Papers */}
            <div className="bg-midnight/85 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiFileText className="size-4 text-violet" />
                <span>Papers</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "PPSupplyMono" }}>
                03
              </div>
            </div>

            {/* Stat 2: Researcher Views */}
            <div className="bg-midnight/85 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiEye className="size-4 text-violet" />
                <span>Views</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "PPSupplyMono" }}>
                78
              </div>
            </div>

            {/* Stat 3: Paper Downloads */}
            <div className="bg-midnight/85 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiDownload className="size-4 text-violet" />
                <span>Downloads</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "PPSupplyMono" }}>
                55
              </div>
            </div>

            {/* Stat 4: Repository Index */}
            <div className="bg-midnight/85 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiAward className="size-4 text-violet" />
                <span>DOI Indexed</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-neon" style={{ fontFamily: "PPSupplyMono" }}>
                100%
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="relative z-10 w-full lg:w-auto flex justify-start lg:justify-end mt-4 lg:mt-0">
          <a
            href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ranaweera%2C%20Hirusha%22&l=list&p=1&s=10&sort=bestmatch"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-violet/10 hover:border-violet/50 font-mono text-sm tracking-wider text-white transition-all duration-300 whitespace-nowrap"
          >
            <span>View Zenodo Archive</span>
            <FiArrowUpRight className="size-4 text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
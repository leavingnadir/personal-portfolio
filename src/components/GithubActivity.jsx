import { FiGithub, FiGitCommit, FiGitPullRequest, FiFolder, FiStar } from "react-icons/fi";

export default function GithubActivity() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-32 text-white" id="github-activity">
      
      {/* Header Section */}
      <div className="flex items-center gap-6 mb-10">
        {/* Pulsing Accent Dot */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full border border-violet/30 bg-violet/5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-neon shadow-[0_0_10px_#c084fc]"></div>
        </div>
        
        {/* Section Title */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase" style={{ fontFamily: "PPSupplyMono" }}>
            GitHub Activity
          </h2>
        </div>
      </div>

      {/* Main Activity Card */}
      {/* Uses your 'grid-black-color' class for the sleek gradient background */}
      <div className="grid-black-color relative w-full overflow-hidden flex flex-col lg:flex-row gap-10 justify-between items-center !p-8 sm:!p-10 shadow-2xl">
        
        {/* Background Watermark (Giant Octocat) */}
        <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
          <FiGithub className="w-[400px] h-[400px]" />
        </div>

        {/* Left Side: Info & Stats */}
        <div className="relative z-10 w-full lg:w-3/4 space-y-8">
          
          {/* Title Area */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FiGithub className="size-8 text-neon" />
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Developer Activity</h3>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Stat 1: Commits */}
            <div className="bg-midnight/60 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiGitCommit className="size-4" />
                <span>Commits</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold">332+</div>
            </div>

            {/* Stat 2: PRs */}
            <div className="bg-midnight/60 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiGitPullRequest className="size-4" />
                <span>PRs</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold">1</div>
            </div>

            {/* Stat 3: Repositories */}
            <div className="bg-midnight/60 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiFolder className="size-4" />
                <span>Repositories</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold">33</div>
            </div>

            {/* Stat 4: Stars */}
            <div className="bg-midnight/60 border border-white/5 rounded-xl p-5 hover:border-violet/30 transition-colors backdrop-blur-sm">
              <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 mb-3 uppercase tracking-wider">
                <FiStar className="size-4" />
                <span>Stars</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold">5</div>
            </div>

          </div>
        </div>

        {/* Right Side: CTA Button */}
        <div className="relative z-10 w-full lg:w-auto flex justify-start lg:justify-end mt-4 lg:mt-0">
          <a
            href="https://github.com/leavingnadir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-violet/10 hover:border-violet/50 font-mono text-sm tracking-wider text-white transition-all duration-300 backdrop-blur-md whitespace-nowrap"
          >
            View GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
}
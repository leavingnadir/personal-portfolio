/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import { FiDownload, FiFileText, FiCheck } from "react-icons/fi";

export default function ResumeSection() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <section
      id="resume"
      className="relative py-32 px-4 overflow-hidden flex flex-col items-center justify-center text-center bg-primary"
    >
      {/* Subtle Ambient Center Glow */}
      <div className="absolute w-[500px] h-[220px] bg-violet/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Floating Glass Accents */}
      <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-2xl bg-midnight/80 border border-white/10 rotate-12 absolute top-24 left-[18%] shadow-xl backdrop-blur-md text-violet/60 pointer-events-none">
        <FiFileText className="size-5" />
      </div>
      <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-midnight/80 border border-violet/20 -rotate-12 absolute bottom-24 right-[18%] shadow-xl backdrop-blur-md text-neon/60 pointer-events-none">
        <FiDownload className="size-5" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-neutral-300 mb-5">
          <span className="p-1 rounded bg-violet/20 text-neon">
            <FiFileText className="size-3.5" />
          </span>
          <span>CURRICULUM VITAE</span>
        </div>

        {/* Bold Centered Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-5">
          Download my complete
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neon to-violet">
            resume &amp; dossier
          </span>
        </h2>

        {/* Clean Subtitle */}
        <p className="text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed mb-12">
          A curated overview of my academic background, full-stack engineering projects, and network infrastructure experience.
        </p>
      </div>

      {/* Signature Glowing Pill & Horizontal Light Beams */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-center">
        {/* Left Horizontal Light Flare */}
        <div className="relative flex-1 flex items-center">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-violet to-neon" />
          <div className="absolute inset-x-0 h-5 bg-gradient-to-r from-transparent via-violet/40 to-neon/70 blur-md pointer-events-none" />
        </div>

        {/* Center Luminous Pill CTA Button */}
        <a
          href="/assets/Hirusha_Ranaweera_Resume.pdf"
          download="Hirusha_Ranaweera_Resume.pdf"
          onClick={handleDownload}
          className="group relative flex items-center justify-between gap-6 sm:gap-12 px-7 sm:px-9 py-4 sm:py-5 rounded-full bg-midnight border border-neon/80 shadow-[0_0_35px_rgba(139,92,246,0.7),0_0_14px_rgba(192,132,252,0.85)] hover:shadow-[0_0_50px_rgba(139,92,246,0.95),0_0_22px_rgba(255,255,255,0.6)] hover:scale-[1.02] transition-all duration-300 cursor-pointer shrink-0"
        >
          <span className="font-mono text-xs sm:text-sm text-neutral-200 group-hover:text-white tracking-wide">
            {downloaded
              ? "Resume downloaded successfully"
              : "Download Resume"}
          </span>

          <span className="w-8 h-8 rounded-full bg-violet/20 border border-neon/40 flex items-center justify-center text-neon group-hover:bg-violet group-hover:text-white transition-colors">
            {downloaded ? (
              <FiCheck className="size-4 text-emerald-300" />
            ) : (
              <FiDownload className="size-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </span>
        </a>

        {/* Right Horizontal Light Flare */}
        <div className="relative flex-1 flex items-center">
          <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-violet to-neon" />
          <div className="absolute inset-x-0 h-5 bg-gradient-to-l from-transparent via-violet/40 to-neon/70 blur-md pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
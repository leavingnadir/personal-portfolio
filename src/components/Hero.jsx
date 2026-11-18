/* eslint-disable react/jsx-no-comment-textnodes */
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-[100svh] w-full flex flex-col items-center justify-end overflow-hidden isolate px-4 pt-20 sm:pt-24 select-none"
    >
      {/* Ambient Violet Backlight Behind Subject */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[500px] sm:h-[420px] bg-violet/20 rounded-full blur-3xl md:blur-[130px] pointer-events-none z-0"
      />

      {/* Centered Giant Background Typography (Cleared Below Navbar) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 sm:top-24 bottom-24 flex flex-col items-center justify-center text-center pointer-events-none z-10 overflow-hidden px-2"
      >
        <h1
          className="text-[20vw] sm:text-[17.5vw] lg:text-[14rem] xl:text-[16rem] font-bold uppercase tracking-tighter leading-[0.88] text-transparent bg-clip-text bg-gradient-to-b from-white/95 via-neon/70 to-violet/15 drop-shadow-[0_0_30px_rgba(139,92,246,0.25)] whitespace-nowrap"
          style={{ fontFamily: "PPSupplyMono" }}
        >
          Hirusha
        </h1>
        <h2
          className="text-[15.5vw] sm:text-[13.5vw] lg:text-[10.5rem] xl:text-[12.5rem] font-bold uppercase tracking-tighter leading-[0.92] text-white/85 drop-shadow-[0_0_30px_rgba(139,92,246,0.25)] whitespace-nowrap mt-1 sm:mt-2"
          style={{ fontFamily: "PPSupplyMono" }}
        >
          RANAWEERA
        </h2>
      </div>

      {/* Foreground Portrait Container (82%–88% Viewport Height) */}
      <div className="relative z-20 w-full flex justify-center items-end pointer-events-none">
        <img
          src="/assets/Myself_Gemini_Generated.png"
          alt="Hirusha Ranaweera"
          fetchPriority="high"
          decoding="async"
          className="h-[80svh] sm:h-[84svh] lg:h-[86vh] max-h-[900px] w-full sm:w-auto max-w-[540px] sm:max-w-none object-cover sm:object-contain object-[50%_18%] sm:object-bottom"
          style={{
            maskImage:
              "radial-gradient(ellipse 76% 88% at 50% 48%, #000 58%, transparent 97%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 76% 88% at 50% 48%, #000 58%, transparent 97%)",
          }}
        />
      </div>

      {/* Bottom Gradient Fade for Seamless Transition & Scroll CTA Contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-36 sm:h-44 bg-gradient-to-t from-primary via-primary/90 to-transparent pointer-events-none z-20"
      />

      {/* Bottom Scroll Down Indicator */}
      <a
        href="#roles"
        aria-label="Scroll down to roles and specializations"
        className="group absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer"
      >
        <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-neutral-300 group-hover:text-neon transition-colors">
          SCROLL_DOWN
        </span>
        <div className="w-5 h-7 rounded-full border border-violet/50 group-hover:border-neon bg-midnight/95 flex justify-center pt-1.5 shadow-[0_0_15px_rgba(139,92,246,0.35)] transition-colors">
          <span className="w-1 h-1.5 rounded-full bg-neon animate-bounce" />
        </div>
        <FiChevronDown className="size-4 text-violet group-hover:text-neon group-hover:translate-y-0.5 transition-all" />
      </a>
    </section>
  );
}
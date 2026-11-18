import { lazy, Suspense } from "react";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";

const GithubActivity = lazy(() => import("../components/GithubActivity"));
const Resume = lazy(() => import("../components/resume"));

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-primary text-white selection:bg-violet/30 selection:text-neon">
      
      {/* GLOBAL FIXED BACKGROUND CANVAS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Lightweight Mobile Radial Glow (Zero GPU Blur Cost) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.14),transparent_65%)] md:hidden" />

        {/* Architectural Cyber Grid (Desktop) */}
        <div
          className="hidden md:block absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 35%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 35%, #000 40%, transparent 100%)",
          }}
        />

        {/* Ambient Violet & Purple Light Orbs (Desktop Only) */}
        <div className="hidden md:block absolute -top-32 left-1/4 w-[520px] h-[520px] bg-violet/12 rounded-full blur-[140px]" />
        <div className="hidden md:block absolute top-[42%] -right-24 w-[460px] h-[460px] bg-purple/10 rounded-full blur-[140px]" />
        <div className="hidden md:block absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-neon/8 rounded-full blur-[150px]" />

        {/* Subtle Vignette Edge Framing */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,#0a0b10_100%)]" />
      </div>

      {/* CONTINUOUS VERTICAL BACKBONE SPINE */}
      <div className="relative z-10">
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-violet/20 to-transparent pointer-events-none"
        />

        <Hero />
        <StatsSection />

        <Suspense fallback={<div className="h-32" />}>
          <GithubActivity />
          <Resume />
        </Suspense>
      </div>

    </main>
  );
}
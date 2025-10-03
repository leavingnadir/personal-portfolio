import LiquidChrome from '../components/LiquidChrome';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center px-4 md:px-8 overflow-hidden isolate">
      <div className="absolute inset-0 -z-10">
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.3}
          amplitude={0.3}
          interactive={false}
        />
      </div>

      <div className="static z-10 max-w-4xl text-white px-2 sm:px-4 flex-col items-center justify-center mt-72">
        <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-light mb-6 md:mb-8 font-display max-w-3xl">
          Bridging Design and Development <br className="hidden sm:block" /> for the Digital Age.
        </h1>
        <h2
          id="story-text"
          className="text-[clamp(0.7rem,1.5vw,1rem)] text-neutral-400 font-mono tracking-wider max-w-2xl"
        >
          “Passionate about code, design, and security <br />
          I’m on a mission to build digital solutions that last.”
        </h2>
      </div>

      <div className="hidden sm:block absolute top-4 md:top-8 left-4 md:left-8 text-left">
        <p className="text-xs md:text-sm text-neutral-400 mb-1">+Get in touch</p>
        <span className="text-xs md:text-sm font-mono text-white break-words">
          hello.hirusharanaweera@gmail.com
        </span>
      </div>

      <div className="hidden sm:flex absolute bottom-4 md:bottom-8 left-4 md:left-8 flex-col gap-1.5 md:gap-2">
        <a href="mailto:hello.hirusharanaweera@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-sm">Email</a>
        <a href="https://www.linkedin.com/in/hirusha-ranaweera-480a91365/" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
        <a href="https://github.com/leavingnadir" className="text-neutral-400 hover:text-white transition-colors text-sm">Github</a>
        <a href="https://www.behance.net/hirusharanaweera" className="text-neutral-400 hover:text-white transition-colors text-sm">Behance</a>
        <a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ranaweera%2C%20Hirusha%22&l=list&p=1&s=10&sort=bestmatch" className="text-neutral-400 hover:text-white transition-colors text-sm">Zenodo</a>
      </div>

      {/* Mobile Contact Section */}
      <div className="sm:hidden mt-auto mb-6 flex flex-col items-center gap-2 text-sm text-neutral-400">
        <p className="text-xs">+Get in touch</p>
        <span className="text-xs font-mono text-white break-words text-center">
          hello.hirusharanaweera@gmail.com
        </span>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <a href="mailto:hello.hirusharanaweera@gmail.com" className="hover:text-white">Email</a>
          <a href="https://www.linkedin.com/in/hirusha-ranaweera-480a91365/" className="hover:text-white">LinkedIn</a>
          <a href="https://github.com/leavingnadir" className="hover:text-white">Github</a>
          <a href="https://www.behance.net/hirusharanaweera" className="hover:text-white">Behance</a>
          <a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ranaweera%2C%20Hirusha%22&l=list&p=1&s=10&sort=bestmatch" className="hover:text-white">Zenodo</a>
        </div>
      </div>
    </section>
  );
};

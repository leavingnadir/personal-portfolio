import LiquidChrome from '../components/LiquidChrome';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <LiquidChrome
          baseColor={[0.1, 0.1, 0.1]}
          speed={0.3}
          amplitude={0.3}
          interactive={false}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 font-display">
          Bridging Design and Development <br /> for the Digital Age. 
        </h1>
        <h2 id="story-text" className="text-sm md:text-base text-neutral-400 font-mono tracking-wider mb-12">
          “Passionate about code, design, and security <br/>
          I’m on a mission to build digital solutions that last.”
        </h2>
      </div>

      <div className="absolute top-8 left-8 text-left">
        <p className="text-sm text-neutral-400 mb-1">+Get in touch</p>
        <span className="text-sm font-mono text-white">hello.hirusharanaweera@gmail.com</span>
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-2">
        <a href="mailto:hello.hirusharanaweera@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-sm">Email</a>
        <a href="https://www.linkedin.com/in/hirusha-ranaweera-480a91365/" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
        <a href="https://github.com/leavingnadir" className="text-neutral-400 hover:text-white transition-colors text-sm">Github</a>
        <a href="https://www.behance.net/hirusharanaweera" className="text-neutral-400 hover:text-white transition-colors text-sm">Behance</a>
        <a href="https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Ranaweera%2C%20Hirusha%22&l=list&p=1&s=10&sort=bestmatch" className="text-neutral-400 hover:text-white transition-colors text-sm">Zenodo</a>
      </div>
      <div className="absolute z-20 w-[600px] h-[600px] rounded-full border border-gray-700 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

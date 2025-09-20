//import MetaballsCanvas from "../components/MetaballsCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-primary">
      {/* Background Metaballs <MetaballsCanvas />*/}
      
      <div id="stats"></div>
      <div id="ui-container"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 font-display">
          Where matter becomes <br /> thought and thought <br /> becomes form
        </h1>
        <h2 id="story-text" className="text-sm md:text-base text-neutral-400 font-mono tracking-wider mb-12">
          our vessel drifts at coordinates (0.00, 0.00)
          <br />
          gravitational field extends 0.10 units into quantum foam
          <br />
          currently merging with 0 other entities
        </h2>
      </div>

      <div className="absolute top-8 left-8 text-left">
        <p className="text-sm text-neutral-400 mb-1">+Get in touch</p>
        <span className="text-sm font-mono text-white">hi@filip.fyi</span>
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-2">
        <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Fluid Dynamics</a>
        <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Organic Shapes</a>
        <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Interactive Forms</a>
        <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Motion Studies</a>
        <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Contact</a>
      </div>
      <div className="absolute z-20 w-[600px] h-[600px] rounded-full border border-gray-700 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
};

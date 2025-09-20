Libs:

npm install
npm i react-icons

https://freefrontend.com/javascript-hero-effects/
https://codepen.io/filipz/pen/ogXXXPJ
https://codepen.io/filipz/pen/NPqJJyz

import MetaballsCanvas from "../components/MetaballsCanvas";

export default function Hero() {
  return (
    <section className="section hero-section">
      {/* Background Metaballs */}
      <MetaballsCanvas />

      <div id="stats"></div>
      <div id="ui-container"></div>

      <div className="header-area">
        <div className="logo-container" id="theme-toggle">
          <div className="logo-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
        <div className="center-logo">
          <h1 id="logo-text">Nexus.</h1>
        </div>
      </div>

      <div className="hero">
        <h1>
          Where matter becomes <br /> thought and thought <br /> becomes form
        </h1>
        <h2 id="story-text">
          our vessel drifts at coordinates (0.00, 0.00)
          <br />
          gravitational field extends 0.10 units into quantum foam
          <br />
          currently merging with 0 other entities
        </h2>
      </div>

      <div className="contact-info">
        <p className="contact-heading">+Get in touch</p>
        <span className="contact-email">hi@filip.fyi</span>
      </div>

      <div className="footer-links">
        <a href="#" className="footer-link">Fluid Dynamics</a>
        <a href="#" className="footer-link">Organic Shapes</a>
        <a href="#" className="footer-link">Interactive Forms</a>
        <a href="#" className="footer-link">Motion Studies</a>
        <a href="#" className="footer-link">Contact</a>
      </div>

      <div className="coordinates">
        <p>Nexus State • Active</p>
        <p>where consciousness flows</p>
      </div>
    </section>
  );
}


<section className="flex items-center justify-center h-screen text-white overflow-hidden">
<div className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 opacity-20 blur-3xl"></div>
      <div className="absolute z-20 w-[600px] h-[600px] rounded-full border border-gray-700 opacity-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="relative z-10">
        <img
          src="/assets/person.png"
          alt="Person"
          width={400}
          height={500}
          className="object-cover mx-auto"
        />
      </div>
      <div className="absolute z-20 text-center">
        <h1 className="text-5xl font-bold tracking-widest">JOHN DOE</h1>
        <p className="mt-4 text-xl tracking-wide text-gray-300">Creative Designer</p>
      </div>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 group p-3 rounded-xl backdrop-blur-xl border-2 border-blue-500/30 bg-gradient-to-br from-blue-900/40 via-black/60 to-black/80 shadow-lg hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-blue-400/60 overflow-hidden z-30"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 via-blue-400/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-5 h-5 fill-current text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
          >
            <path d="M100.28 448H7.4V148.9h92.88zm-46.44-338C24.28 110 0 85.72 0 56.44 0 27.28 24.28 3 53.84 3c29.56 0 53.84 24.28 53.84 53.44 0 29.28-24.28 53.56-53.84 53.56zM447.9 448h-92.36V302.4c0-34.7-12.4-58.4-43.44-58.4-23.72 0-37.8 16-44 31.4-2.28 5.6-2.84 13.4-2.84 21.2V448h-92.36s1.24-269.6 0-297.1h92.36v42c12.28-18.9 34.28-45.9 83.44-45.9 60.84 0 106.4 39.8 106.4 125.2z" />
          </svg>
          <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors duration-300">
            LinkedIn
          </span>
        </div>
      </a>
    </section>
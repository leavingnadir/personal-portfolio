/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiTerminal, FiMail } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1450);

  // Listen to window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1450);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "TechStack", href: "/stack" },
    { name: "Experience", href: "/experience" },
    { name: "Certifications", href: "/certifications" },
    { name: "Education", href: "/education" },
    { name: "Awards", href: "/awards" },
    { name: "Publications", href: "/publications" },
  ];

  return (
    <header className="bg-midnight/90 backdrop-blur-xl border-b border-white/5 shadow-2xl fixed w-full top-0 z-[60]">
      <div className="flex justify-between items-center h-24 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        
        {/* Logo / Monogram */}
        <a href="/" className="group flex items-center gap-2.5 text-white font-mono font-bold text-lg tracking-wide flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-violet/20 border border-violet/40 flex items-center justify-center text-neon group-hover:scale-105 transition-transform duration-300">
            <FiTerminal className="size-4" />
          </div>
          <span>Hirusha<span className="text-violet">.R</span></span>
        </a>

        {/* Desktop Menu */}
        {isDesktop && (
          <>
            <nav className="ml-8 font-mono text-xs uppercase tracking-wider">
              <ul className="flex items-center space-x-6 lg:space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name} className="relative group py-1">
                    <a 
                      href={link.href} 
                      className="text-neutral-400 group-hover:text-neon transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-violet to-neon group-hover:w-full transition-all duration-300" />
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <a href="mailto:hello.hirusharanaweera@gmail.com">
                <button className="inline-flex items-center gap-2 bg-violet hover:bg-violet/80 text-white font-mono text-xs tracking-wider uppercase px-5 py-2.5 rounded-xl shadow-lg shadow-violet/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                  <FiMail className="size-3.5" />
                  <span>Contact Me</span>
                </button>
              </a>
            </div>
          </>
        )}

        {/* Hamburger Icon for Mobile */}
        {!isDesktop && (
          <div className="flex items-center relative z-[70]">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-midnight border border-white/10 text-white text-2xl focus:outline-none hover:border-violet/50 transition-colors"
            >
              {isOpen ? <HiX className="text-neon" /> : <HiMenu />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Fullscreen Menu */}
      {!isDesktop && isOpen && (
        <div className="fixed inset-0 bg-midnight/95 backdrop-blur-2xl flex flex-col justify-center items-center text-center z-[60] px-6">
          <ul className="flex flex-col space-y-5 text-white font-mono text-base uppercase tracking-wider">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="opacity-0 transform -translate-y-4 animate-fade-down"
                style={{
                  animationDelay: `${index * 60}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-400 hover:text-neon transition-colors duration-200"
                >
                  // {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            href="mailto:hello.hirusharanaweera@gmail.com"
            className="mt-10 opacity-0 transform -translate-y-4 animate-fade-down"
            style={{ animationDelay: `${navLinks.length * 60}ms`, animationFillMode: "forwards" }}
          >
            <button
              className="inline-flex items-center gap-2 bg-violet hover:bg-violet/80 text-white font-mono text-xs tracking-widest uppercase px-6 py-3 rounded-xl shadow-lg shadow-violet/25 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FiMail className="size-4" />
              <span>Contact Me</span>
            </button>
          </a>
        </div>
      )}

      {/* Tailwind keyframes for fade-down animation */}
      <style jsx>{`
        @keyframes fade-down {
          0% {
            opacity: 0;
            transform: translateY(-1rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-down {
          animation: fade-down 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
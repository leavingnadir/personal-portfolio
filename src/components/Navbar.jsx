import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
    <header className="bg-[#030412] shadow-lg fixed w-full z-60">
      <div className="flex justify-between items-center h-24 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <a href="/" className="text-white font-bold text-xl tracking-wide flex-shrink-0">
          Hirusha Ranaweera
        </a>

        {/* Desktop Menu */}
        {isDesktop && (
          <>
            <nav className="ml-8 font-semibold text-base lg:text-lg">
              <ul className="flex items-center space-x-4 lg:space-x-6">
                {navLinks.map((link) => (
                  <li key={link.name} className="hover:text-rose-600 transition-colors duration-200">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <a href="mailto:hello.hirusharanaweera@gmail.com">
                <button className="bg-rose-600 hover:bg-rose-800 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded transition-colors duration-200">
                  Contact Me
                </button>
              </a>
            </div>
          </>
        )}

        {/* Hamburger Icon for Mobile */}
        {!isDesktop && (
          <div className="flex items-center relative z-[60]">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl focus:outline-none">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Fullscreen Menu */}
      {!isDesktop && isOpen && (
        <div className="fixed inset-0 bg-[#030412] flex flex-col justify-center items-center text-center z-[50]">
          <ul className="flex flex-col space-y-6 text-white text-xl font-semibold">
            {navLinks.map((link, index) => (
              <li
                key={link.name}
                className="opacity-0 transform -translate-y-4 animate-fade-down"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-rose-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button */}
          <a
            href="mailto:hello.hirusharanaweera@gmail.com"
            className="mt-8 opacity-0 transform -translate-y-4 animate-fade-down"
            style={{ animationDelay: `${navLinks.length * 100}ms`, animationFillMode: "forwards" }}
          >
            <button
              className="bg-rose-600 hover:bg-rose-800 text-white font-bold px-6 py-3 rounded transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
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

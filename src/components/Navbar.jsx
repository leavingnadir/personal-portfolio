import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Projects", href: "/Projects" },
    { name: "TechStack", href: "/Stack" },
    { name: "Experience", href: "/Experience" },
    { name: "Certifications", href: "/Certifications" },
    { name: "Education", href: "/Education" },
    { name: "Awards", href: "/Awards" },
    { name: "Publications", href: "/Publications" },
  ];

  return (
    <header className="bg-[#030412] shadow-lg">
      <div className="flex justify-between items-center h-24 px-4 md:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="/"
          className="text-white font-bold text-xl tracking-wide flex-shrink-0"
        >
          Hirusha Ranaweera
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex ml-8 font-semibold text-base lg:text-lg">
          <ul className="flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-rose-600">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:flex">
          <a href="mailto:hello.hirusharanaweera@gmail.com">
            <button className="bg-rose-600 hover:bg-rose-800 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded">
              Contact Me
            </button>
          </a>
        </div>


        {/* Hamburger (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-[#030412] w-full">
          <ul className="flex flex-col space-y-2 px-4 pb-4 text-white font-semibold">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-rose-600">
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button
                className="mt-2 w-full bg-rose-600 hover:bg-rose-800 text-white font-bold py-2 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

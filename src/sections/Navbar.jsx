import { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="top-0 left-0 right-0 w-full z-50">
      <div className="bg-gradient-to-b from-[#030412] to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex sm:hidden text-neutral-400 hover:text-white focus:outline-none"
            >
              <img
                src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>

            <nav className="hidden sm:block">
              <ul className="flex items-center space-x-8 gap-6 mt-2 md:mt-6 lg:mt-12">
                {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-neutral-400 hover:text-white transition-colors text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="py-4">
            <ul className="flex flex-col items-center space-y-4 text-center">
              {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-neutral-400 hover:text-white transition-colors text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  ); 
};

export default Navbar;

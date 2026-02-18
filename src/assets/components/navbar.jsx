import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getNavStyle = () => {
    if (scrolled) {
      return theme === "light"
        ? "w-[95%] md:w-[80%] bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] py-3 rounded-lg"
        : "w-[95%] md:w-[80%] bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_0_15px_rgba(99,102,241,0.3)] py-3 rounded-full";
    }
    return "w-full max-w-7xl bg-transparent border-transparent py-6";
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300"
      >
        <div className={`relative flex items-center justify-between px-6 transition-all duration-500 ${getNavStyle()}`}>
          
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={(e) => handleScrollToSection(e, 'home')}
          >
            <span className={`font-black text-xl tracking-tighter ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              Ariz
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
                  className={`relative text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer
                    ${theme === 'light' 
                        ? 'text-black hover:bg-black hover:text-white px-2 py-1' 
                        : 'text-zinc-300 hover:text-indigo-400'
                    }
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            
            <button 
                onClick={toggleTheme} 
                className="text-2xl cursor-pointer transition-transform hover:rotate-12 active:scale-90"
                aria-label="Toggle Theme"
            >
                {theme === 'light' ? (
                  <FaMoon className="text-black" />
                ) : (
                  <FaSun className="text-white" />
                )}
            </button>

            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`md:hidden text-2xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
               {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8
              ${theme === 'light' ? 'bg-yellow-400' : 'bg-black'}
            `}
          >
             <button 
                onClick={() => setIsOpen(false)}
                className={`absolute top-8 right-8 text-3xl ${theme === 'light' ? 'text-black' : 'text-white'}`}
             >
                <FaTimes />
             </button>

             {["Home", "Skills", "Projects", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={(e) => handleScrollToSection(e, item.toLowerCase())}
                  className={`text-5xl font-black uppercase hover:scale-110 transition-transform cursor-pointer
                    ${theme === 'light' ? 'text-black stroke-white' : 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400'}
                  `}
                  style={theme === 'light' ? { WebkitTextStroke: "2px black", color: "white" } : {}}
                >
                  {item}
                </a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
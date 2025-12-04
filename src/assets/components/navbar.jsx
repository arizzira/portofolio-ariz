import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <ul className="hidden md:flex items-center gap-8 text-slate-300 font-normal text-sm sm:text-base">
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>view Projects</a>
          </li>
          <li className="hover:text-white transition-colors cursor-pointer">
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact Me</a>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4 text-white">
          <a 
            href="https://www.linkedin.com/in/muhammad-ariz-77949a277/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-colors"
          >
            <FaLinkedin />
          </a>
          
          <a 
            href="mailto:arizgg6@gmail.com" 
            className="text-2xl hover:text-gray-300 transition-colors"
          >
            <MdEmail />
          </a>

          <a 
            href="https://github.com/arizzira" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
        </div>

        <div className="md:hidden ml-auto z-50 text-white cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-lg border-b border-white/10 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
          
          <div className="flex flex-col items-center gap-6">
              <ul className="flex flex-col items-center gap-6 text-slate-300 font-medium text-lg">
                  <li className="hover:text-white transition-colors">
                      <a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                      <a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                      <a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                      <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>view Projects</a>
                  </li>
                  <li className="hover:text-white transition-colors">
                      <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact Me</a>
                  </li>
              </ul>

              <div className="w-16 h-[1px] bg-white/20"></div>
              <div className="flex items-center gap-8 text-white">
                  <a 
                    href="https://www.linkedin.com/in/muhammad-ariz-77949a277/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-blue-500 transition-colors"
                  >
                    <FaLinkedin />
                  </a>
                  
                  <a 
                    href="mailto:arizgg6@gmail.com" 
                    className="text-3xl hover:text-gray-300 transition-colors"
                  >
                    <MdEmail />
                  </a>

                  <a 
                    href="https://github.com/arizzira" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-3xl hover:text-gray-400 transition-colors"
                  >
                    <FaGithub />
                  </a>
              </div>
          </div>
      </div>

    </nav>
  );
};

export default Navbar;
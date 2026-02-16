import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; 
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 1. STATE TEMA: Default kita set ke 'light' agar aman saat pertama buka
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // 2. LOGIKA PERUBAHAN CLASS (YANG DIPERBAIKI)
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Reset dulu agar tidak tabrakan
    root.classList.remove('dark');
    root.classList.remove('light');

    if (theme === "dark") {
      // Jika tema 'dark', tambahkan class 'dark'. 
      // Hasil: <html class="dark"> -> Background Hitam
      root.classList.add('dark');
    } else {
      // Jika tema 'light', JANGAN tambahkan class 'dark'.
      // Hasil: <html> -> Background Putih
      root.classList.add('light'); 
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Fungsi ganti tema
  const toggleTheme = () => {
    // Jika sekarang dark, ubah ke light. Jika light, ubah ke dark.
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; 
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent 
        ${scrolled || isOpen 
            ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-white/10 shadow-lg' 
            : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-wider cursor-pointer z-50">
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")}>
                Ariz<span className="text-indigo-600 dark:text-indigo-500">.</span>
            </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-sm">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group cursor-pointer">
                <a 
                    href={`#${item.toLowerCase()}`} 
                    onClick={(e) => handleScrollTo(e, item.toLowerCase())}
                    className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white transition-colors"
                >
                    {item}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right Side: Socials + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
            
          {/* TOMBOL GANTI TEMA (LOGIKA DIPERBAIKI) */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-yellow-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-all mr-2"
            aria-label="Toggle Theme"
          >
            {/* LOGIKA IKON:
               - Jika sedang 'dark' (layar hitam), tampilkan MATAHARI (biar user klik untuk ke terang).
               - Jika sedang 'light' (layar putih), tampilkan BULAN (biar user klik untuk ke gelap).
            */}
            {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          <div className="flex items-center gap-3 text-slate-600 dark:text-white">
            <a href="https://www.linkedin.com/in/muhammad-ariz-77949a277/" target="_blank" rel="noopener noreferrer" className="text-xl p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"><FaLinkedin /></a>
            <a href="https://github.com/arizzira" target="_blank" rel="noopener noreferrer" className="text-xl p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"><FaGithub /></a>
            <a href="mailto:arizgg6@gmail.com" className="text-xl p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"><MdEmail /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-50">
            <button onClick={toggleTheme} className="text-slate-600 dark:text-yellow-300">
                {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <div className="text-slate-900 dark:text-white cursor-pointer p-2" onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'}`}>
          <div className="flex flex-col items-center gap-8">
              <ul className="flex flex-col items-center gap-6 font-medium text-lg text-slate-600 dark:text-slate-300">
                  {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                    <li key={item}>
                        <a href={`#${item.toLowerCase()}`} onClick={(e) => handleScrollTo(e, item.toLowerCase())} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">{item}</a>
                    </li>
                  ))}
              </ul>
              <div className="w-16 h-[1px] bg-slate-200 dark:bg-white/10"></div>
              <div className="flex items-center gap-6 text-slate-600 dark:text-white">
                  <a href="#" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><FaLinkedin /></a>
                  <a href="#" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><FaGithub /></a>
                  <a href="#" className="text-2xl hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"><MdEmail /></a>
              </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
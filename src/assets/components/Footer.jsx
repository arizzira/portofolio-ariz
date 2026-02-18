import React from 'react';
import { FaMapMarkerAlt, FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#0a0a0a] text-black dark:text-white border-t-4 border-black dark:border-white relative overflow-hidden transition-colors duration-500">
        
        <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] pointer-events-none z-0"></div>

        <div className="h-4 w-full bg-[repeating-linear-gradient(45deg,#000,#000_10px,#ff90e8_10px,#ff90e8_20px)] dark:bg-[repeating-linear-gradient(45deg,#fff,#fff_10px,#6366f1_10px,#6366f1_20px)] border-b-4 border-black dark:border-white relative z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          <div className="space-y-6">
             <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-2 font-black text-3xl uppercase -rotate-2 shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
                Ariz.
             </div>
             
            <div className="flex flex-col gap-4 text-base font-mono font-medium text-zinc-700 dark:text-zinc-300">
                <a href="mailto:arizgg6@gmail.com" className="flex items-center gap-3 hover:text-indigo-600 transition-colors group w-fit">
                    <div className="p-2 border-2 border-black dark:border-white bg-white dark:bg-black group-hover:bg-[#ff90e8] transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                        <MdEmail className="text-black dark:text-white" />
                    </div>
                    <span>arizgg6@gmail.com</span>
                </a>
                
                <a 
                    href="https://goo.gl/maps/something" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 hover:text-indigo-600 transition-colors group w-fit"
                >
                    <div className="p-2 border-2 border-black dark:border-white bg-white dark:bg-black group-hover:bg-yellow-400 transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                        <FaMapMarkerAlt className="text-red-500" />
                    </div>
                    <span>Majalengka, Indonesia</span>
                </a>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-xl font-black uppercase text-black dark:text-white mb-6 border-b-4 border-[#ff90e8] w-fit">Quick Links</h3>
            <div className="flex flex-col gap-3 font-bold uppercase">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                    <a 
                        key={item}
                        href={`#${item.toLowerCase()}`} 
                        onClick={(e) => handleScroll(e, item.toLowerCase())} 
                        className="group flex items-center gap-2 hover:translate-x-2 transition-transform duration-200"
                    >
                        <span className="w-2 h-2 bg-black dark:bg-white group-hover:bg-[#6366f1] transition-colors"></span>
                        {item}
                    </a>
                ))}
            </div>
          </div>

           <div className="flex flex-col items-start md:items-end">
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase border-2 border-transparent hover:bg-white hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white transition-all shadow-[5px_5px_0px_0px_#6366f1] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                Back to Top <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
              </button>
           </div>

        </div>

        <div className="mt-16 pt-8 border-t-4 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs md:text-sm font-bold text-zinc-600 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} MUHAMMAD ARIZ. NO RIGHTS RESERVED.</p>
          <p>BUILT WITH <span className="bg-black text-white px-1">REACT</span> + <span className="bg-[#38bdf8] text-black px-1">TAILWIND</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
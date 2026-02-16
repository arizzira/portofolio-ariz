import React from 'react';
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
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

  return (
    <footer 
        // UBAH: Background terang di light mode
        className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-12 border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300"
    >
        
        {/* Decorative Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-50">
             <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-indigo-200/50 dark:bg-indigo-600/20 rounded-full blur-[100px]"></div>
             <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-purple-200/50 dark:bg-purple-600/20 rounded-full blur-[100px]"></div>
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
             <h3 className="text-2xl font-bold mb-4">Ariz<span className="text-indigo-600 dark:text-indigo-500">.</span></h3>
             
            <div className="flex flex-col gap-3 text-sm md:text-base text-slate-600 dark:text-slate-400">
                {/* Email */}
                <a href="mailto:arizgg6@gmail.com" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-white transition-colors group">
                    <MdEmail className="text-lg text-indigo-600 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
                    <span>arizgg6@gmail.com</span>
                </a>
                
                {/* GitHub */}
                <a href="https://github.com/arizzira" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-white transition-colors group">
                    <FaGithub className="text-lg text-indigo-600 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
                    <span>github.com/arizzira</span>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/muhammad-ariz" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-white transition-colors group">
                    <FaLinkedin className="text-lg text-indigo-600 dark:text-indigo-500 group-hover:text-indigo-500 dark:group-hover:text-indigo-400" />
                    <span>linkedin.com/in/muhammad-ariz</span>
                </a>
                
                {/* Location */}
                <div className="flex items-center gap-3 cursor-default">
                    <FaMapMarkerAlt className="text-lg text-indigo-600 dark:text-indigo-500" />
                    <span>Majalengka, Indonesia</span>
                </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Quick Links</h3>
            <div className="flex flex-col gap-3 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
                {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                    <a 
                        key={item}
                        href={`#${item.toLowerCase()}`} 
                        onClick={(e) => handleScroll(e, item.toLowerCase())} 
                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 duration-300 inline-flex items-center gap-1 group"
                    >
                        <span className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-indigo-600 dark:text-indigo-500">›</span> 
                        {item}
                    </a>
                ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-600">
          <p>© 2026 Muhammad Ariz. All rights reserved.</p>
          <p>Designed & Built with <span className="text-indigo-600 dark:text-indigo-500">React</span> + <span className="text-indigo-600 dark:text-indigo-500">Tailwind</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
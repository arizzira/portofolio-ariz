import React from 'react';

const Footer = () => {
  
  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 relative z-20 overflow-hidden">
      
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-footer {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 animate-footer" style={{ animationDelay: '0.2s' }}>
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          
          <div className="space-y-4 text-sm md:text-base">
            <div className="flex items-center gap-2 group">
              <span className="font-semibold w-20 text-slate-400">Email:</span>
              <a href="mailto:arizgg6@gmail.com" className="hover:text-indigo-400 transition-colors relative">
                arizgg6@gmail.com
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="font-semibold w-20 text-slate-400">GitHub:</span>
              <a href="https://github.com/arizzira" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors relative">
                github.com/arizzira
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="font-semibold w-20 text-slate-400">Location:</span>
              <a href="https://maps.app.goo.gl/6XXLaX4u4MDf4RH99" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors relative">
                Majalengka, Indonesia
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
            
            <div className="flex items-center gap-2 group">
              <span className="font-semibold w-20 text-slate-400">LinkedIn:</span>
              <a href="https://linkedin.com/in/muhammad-ariz" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors relative">
                linkedin.com/in/muhammad-ariz
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-400 transition-all group-hover:w-full"></span>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base font-medium">
             <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-indigo-400 transition-colors hover:translate-x-1 duration-300">Home</a>
             <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-indigo-400 transition-colors hover:translate-x-1 duration-300">About</a>
             <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-indigo-400 transition-colors hover:translate-x-1 duration-300">Skills</a>
             <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="hover:text-indigo-400 transition-colors hover:translate-x-1 duration-300">View Projects</a>
             <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-indigo-400 transition-colors hover:translate-x-1 duration-300">Contact Me</a>
          </div>

        </div>

        <div className="mt-16 text-center text-slate-500 text-sm border-t border-white/5 pt-8">
          © 2025 Muhammad Ariz — Portfolio Website
        </div>

      </div>
    </footer>
  );
};

export default Footer;

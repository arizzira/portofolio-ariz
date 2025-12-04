import React, { useState, useEffect, useRef } from 'react';
import nodeLogo from '../assets/images/logoassets/Node.png';
import tailwindLogo from '../assets/images/logoassets/Tailwind.png';
import reactLogo from '../assets/images/logoassets/react.png';
import jsLogo from '../assets/images/logoassets/js.png';
import htmlLogo from '../assets/images/logoassets/HTML.png';
import cssLogo from '../assets/images/logoassets/CSS.png';
import mysqlLogo from '../assets/images/logoassets/MySQL.png';
import pmaLogo from '../assets/images/logoassets/PhpMyAdmin.png';
import vscodeLogo from '../assets/images/logoassets/VScode.png';
import postmanLogo from '../assets/images/logoassets/postmant.png';
import figmaLogo from '../assets/images/logoassets/figma.png';
import githubLogo from '../assets/images/logoassets/github.png';
import phpLogo from '../assets/images/logoassets/phpp.png';
import hapiLogo from '../assets/images/logoassets/hapi.png';
import pythonLogo from '../assets/images/logoassets/pythonn.png';

const Skills = () => {
  // 1. Setup State dan Ref untuk deteksi scroll
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jika elemen muncul di layar, set isVisible jadi true
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Stop observe biar animasi cuma sekali
        }
      },
      { threshold: 0.1 } // Trigger saat 10% elemen terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          /* Class untuk menjalankan animasi */
          .animate-active {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          /* Class untuk menyembunyikan elemen sebelum di-scroll */
          .opacity-0-start {
             opacity: 0;
          }

          /* Delays untuk efek berurutan */
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
          .delay-700 { animation-delay: 0.7s; }
          .delay-800 { animation-delay: 0.8s; }
        `}
      </style>

      {/* 2. Pasang ref={sectionRef} */}
      <section id="skills" ref={sectionRef} className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Logika Class: Jika isVisible ? animate-active : opacity-0-start */}
          
          <div className={isVisible ? "animate-active delay-100" : "opacity-0-start"}>
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-slate-400 mb-16">
              Tools and technologies I use to build things.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10">
            
            <div className={`flex flex-col items-center ${isVisible ? "animate-active delay-300" : "opacity-0-start"}`}>
              <h3 className="text-2xl font-semibold text-white mb-8">Back-End</h3>
              <div className="flex flex-wrap justify-center gap-6">
                 <img src={nodeLogo} alt="Node.js" className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className={`flex flex-col items-center ${isVisible ? "animate-active delay-400" : "opacity-0-start"}`}>
              <h3 className="text-2xl font-semibold text-white mb-8">Front-End</h3>
              <div className="flex flex-wrap justify-center items-center gap-6 max-w-xs">
                 <img src={tailwindLogo} alt="Tailwind CSS" className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <img src={reactLogo} alt="React" className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <img src={jsLogo} alt="JavaScript" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <div className="flex gap-6 w-full justify-center mt-2">
                   <img src={htmlLogo} alt="HTML5" className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                   <img src={cssLogo} alt="CSS3" className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 </div>
              </div>
            </div>

            <div className={`flex flex-col items-center ${isVisible ? "animate-active delay-500" : "opacity-0-start"}`}>
              <h3 className="text-2xl font-semibold text-white mb-8">Database</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                 <img src={mysqlLogo} alt="MySQL" className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <img src={pmaLogo} alt="phpMyAdmin" className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className={`flex flex-col items-center ${isVisible ? "animate-active delay-600" : "opacity-0-start"}`}>
              <h3 className="text-2xl font-semibold text-white mb-8">Languages</h3>
              <div className="flex flex-wrap justify-center gap-6">
                 <img src={jsLogo} alt="JavaScript" className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className={`flex flex-col items-center ${isVisible ? "animate-active delay-700" : "opacity-0-start"}`}>
              <h3 className="text-2xl font-semibold text-white mb-8">Tools</h3>
              <div className="grid grid-cols-2 gap-6 place-items-center">
                 <img src={vscodeLogo} alt="VS Code" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <img src={postmanLogo} alt="Postman" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <img src={figmaLogo} alt="Figma" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                 <img src={githubLogo} alt="GitHub" className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            <div className={`flex flex-col items-center ${isVisible ? "animate-active delay-800" : "opacity-0-start"}`}>
              <h3 className="text-2xl font-semibold text-white mb-8">Currently Learning</h3>
              <div className="flex flex-wrap justify-center items-center gap-6">
                 <div className="flex gap-4">
                     <img src={phpLogo} alt="PHP" className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300" />
                     <img src={hapiLogo} alt="Hapi" className="h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 grayscale hover:grayscale-0 opacity-80 hover:opacity-100" />
                 </div>
                 <img src={pythonLogo} alt="Python" className="h-14 w-auto object-contain hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
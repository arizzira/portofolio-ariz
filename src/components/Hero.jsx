import React, { useState, useEffect, useRef } from 'react';
import profileImg from "../assets/images/profile/profile.png"; 
import { FaDownload } from "react-icons/fa"; 
import cvFile from "../assets/cv-ariz.pdf"; 

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); 
        }
      },
      { threshold: 0.1 } 
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
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-rotate {
            0%, 100% { transform: translateY(0px) rotate(12deg); }
            50% { transform: translateY(-10px) rotate(18deg); }
          }
          
          /* Class Animasi */
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animate-fade-in-right {
            animation: fadeInRight 1s ease-out forwards;
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-rotate {
            animation: float-rotate 5s ease-in-out infinite;
          }
          
          /* Helper Class untuk menyembunyikan elemen sebelum animasi */
          .opacity-0-start {
            opacity: 0;
          }
          
          /* Delays */
          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      <section id="home" ref={sectionRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex flex-col gap-4 relative z-10">
              <svg width="60" height="20" viewBox="0 0 60 20" className="absolute -top-10 left-0 md:left-20 stroke-white fill-none stroke-2 opacity-70 animate-float-slow">
                  <path d="M0 20 L10 0 L20 20 L30 0 L40 20 L50 0 L60 20" />
              </svg>
              <h2 className={`text-3xl md:text-4xl font-bold text-white ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0-start'}`}>
                  Hi, I'm
              </h2>
              <h1 className={`text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0-start'}`}>
                  Muhammad Ariz
              </h1>
              <h3 className={`text-2xl md:text-3xl text-white font-medium ${isVisible ? 'animate-fade-in-up delay-300' : 'opacity-0-start'}`}>
                  Front-End Developer
              </h3>
              
              <p className={`text-slate-400 max-w-lg text-base md:text-lg leading-relaxed mt-4 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0-start'}`}>
                  Informatics Engineering student focusing on full-stack web 
                  development using React and Node.js. Experienced in industry 
                  level capstone projects and building fullstack apps end-to-end.
              </p>

              <div className={`mt-8 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0-start'}`}>
                  <a 
                      href={cvFile} 
                      download="CV-Muhammad-Ariz.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-1"
                  >
                      <span>Download CV</span>
                      <FaDownload className="group-hover:animate-bounce" />
                  </a>
              </div>

               <svg width="40" height="40" viewBox="0 0 50 50" className="absolute -bottom-20 left-10 stroke-gray-500 fill-none stroke-2 opacity-50 animate-float-rotate">
                   <path d="M25 5 L45 45 L5 45 Z" />
               </svg>
          </div>

          <div className={`w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0 ${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0-start'}`}>
              
              <svg width="80" height="80" viewBox="0 0 100 100" className="absolute top-0 right-10 stroke-white fill-none stroke-1 opacity-60 z-0 animate-float">
                  <circle cx="40" cy="40" r="35" />
                  <circle cx="60" cy="60" r="35" />
              </svg>

              <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[500px]">
                  <img 
                      src={profileImg} 
                      alt="Muhammad Ariz" 
                      className="w-full h-full object-contain object-bottom drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
                      style={{
                          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                      }}
                  />
              </div>

              <svg width="30" height="30" viewBox="0 0 40 40" className="absolute bottom-10 right-0 stroke-white stroke-2 opacity-80 animate-float-slow">
                  <line x1="20" y1="0" x2="20" y2="40" />
                  <line x1="0" y1="20" x2="40" y2="20" />
              </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
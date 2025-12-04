import React, { useState, useEffect, useRef } from 'react';

const About = () => {
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
      { threshold: 0.2 }
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
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }

          .opacity-0-start {
            opacity: 0;
          }

          .delay-100 { animation-delay: 0.1s; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>

      <section id="about" ref={sectionRef} className="relative py-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative">

          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-70 hidden md:block animate-float">
            <svg width="50" height="50" viewBox="0 0 50 50" className="stroke-slate-400 fill-none stroke-1">
              <path d="M10 5 L40 25 L10 45 Z" /> 
            </svg>
          </div>

          <div className="absolute -top-10 right-0 md:right-10 opacity-70 animate-spin-slow">
            <svg width="30" height="30" viewBox="0 0 40 40" className="stroke-white stroke-2">
              <line x1="20" y1="0" x2="20" y2="40" />
              <line x1="0" y1="20" x2="40" y2="20" />
            </svg>
          </div>

          <div className="max-w-4xl">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 leading-tight ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0-start'}`}>
              I’m an Informatic Engineering Student
            </h2>
            
            <p className={`text-slate-400 text-base md:text-lg leading-8 text-justify md:text-left ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0-start'}`}>
              I’m an Informatics Engineering student with hands-on experience in building full-stack web applications. 
              I worked on an industry-level capstone project (Dicoding x Accenture) as a UI/UX and Front-End Developer, 
              and I also develop personal fullstack projects using React, Node.js, and PostgreSQL. 
              I love creating clean interfaces, efficient backend logic, and experimenting with Python for gesture projects.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
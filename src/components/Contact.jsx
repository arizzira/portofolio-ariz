import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
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
      { threshold: 0.3 } // Trigger saat 30% elemen terlihat
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
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes popIn {
            0% { opacity: 0; transform: scale(0.5); }
            100% { opacity: 1; transform: scale(1); }
          }

          .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          
          .animate-pop-in {
            animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          }

          /* Helper class untuk hide sebelum scroll */
          .opacity-0-start {
            opacity: 0;
          }
        `}
      </style>

      {/* 2. Pasang ref={sectionRef} */}
      <section id="contact" ref={sectionRef} className="py-20 flex flex-col items-center justify-center relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* Logika Class: Jika isVisible ? animate-fade-in : opacity-0-start */}

        <h2 
          className={`text-4xl font-bold text-white mb-4 ${isVisible ? "animate-fade-in" : "opacity-0-start"}`}
          style={{ animationDelay: '0.1s' }}
        >
          Get in Touch
        </h2>
        
        <p 
          className={`text-slate-400 mb-10 text-center px-4 ${isVisible ? "animate-fade-in" : "opacity-0-start"}`}
          style={{ animationDelay: '0.2s' }}
        >
          Feel free to reach out for collaborations or opportunities.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/muhammad-ariz-77949a277/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl text-white hover:text-blue-500 transition-transform hover:scale-110 duration-300 ${isVisible ? "animate-pop-in" : "opacity-0-start"}`}
            style={{ animationDelay: '0.3s' }}
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:arizgg6@gmail.com"
            className={`text-4xl text-white hover:text-gray-300 transition-transform hover:scale-110 duration-300 ${isVisible ? "animate-pop-in" : "opacity-0-start"}`}
            style={{ animationDelay: '0.4s' }}
          >
            <MdEmail />
          </a>

          <a 
            href="https://maps.app.goo.gl/6XXLaX4u4MDf4RH99" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-4xl text-white hover:text-red-500 transition-transform hover:scale-110 duration-300 cursor-pointer ${isVisible ? "animate-pop-in" : "opacity-0-start"}`}
            style={{ animationDelay: '0.5s' }}
          >
            <FaMapMarkerAlt />
          </a>

          <a
            href="https://github.com/arizzira"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl text-white hover:text-gray-400 transition-transform hover:scale-110 duration-300 ${isVisible ? "animate-pop-in" : "opacity-0-start"}`}
            style={{ animationDelay: '0.6s' }}
          >
            <FaGithub />
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
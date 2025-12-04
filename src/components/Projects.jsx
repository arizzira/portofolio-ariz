import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import p1_1 from '../assets/images/porto/porto1/porto1-1.png';
import p1_2 from '../assets/images/porto/porto1/porto1-2.png';
import p1_3 from '../assets/images/porto/porto1/porto1-3.png';
import p1_4 from '../assets/images/porto/porto1/porto1-4.png';
import p1_5 from '../assets/images/porto/porto1/porto1-5.png';
import p1_6 from '../assets/images/porto/porto1/porto1-6.png';
import p1_7 from '../assets/images/porto/porto1/porto1-7.png';
import p2_1 from '../assets/images/porto/porto2/porto2-1.png';
import p2_2 from '../assets/images/porto/porto2/porto2-2.png';
import p2_3 from '../assets/images/porto/porto2/porto2-3.png';
import p2_4 from '../assets/images/porto/porto2/porto2-4.png';
import p2_5 from '../assets/images/porto/porto2/porto2-5.png';
import p3_1 from '../assets/images/porto/porto3/porto3-1.png';


const projects = [
  {
    id: 1,
    title: "NeuraMaint (AI Predictive Machine Copilot)",
    role: "UI/UX Designer & Front-End Developer",
    repo: "Private (Organization Property)",
    status: "Local Project",
    desc: "An AI-powered predictive maintenance dashboard used to assist technicians in monitoring and forecasting machine health. I designed the UI/UX and developed the frontend interface.",
    images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7],
    tech: ["React", "Tailwind"]
  },
  {
    id: 2,
    title: "Travel Best Cirebon (Fullstack Web App)",
    role: "Fullstack Developer",
    repoLink: "https://github.com/arizzira/Web_Desain_Travel_Project",
    status: "Local Project",
    desc: "A complete travel booking website featuring responsive UI, admin panel, data management, and custom backend/API built with PHP and phpMySql. Developed fully by me from frontend design to backend architecture.",
    images: [p2_1, p2_2, p2_3, p2_4, p2_5],
    tech: ["React", "PHP", "phpMyAdmin"]
  },
  {
    id: 3,
    title: "Hand Gesture Detection (Python + Mediapipe)",
    role: "Developer",
    repoLink: "https://github.com/arizzira/Spotify-Controller-with-hand-gesture",
    status: "Local Project",
    desc: "An experimental project using Python and Mediapipe to detect specific hand gestures in real time. Great example of my curiosity and interest in computer vision.",
    images: [p3_1],
    tech: ["Python", "Mediapipe", "OpenCV"]
  }
];

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 0) return null;

  return (
    <div 
      className="relative w-full h-64 md:h-80 group rounded-xl overflow-hidden shadow-xl border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div 
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
        className="w-full h-full bg-center bg-cover duration-500 ease-in-out"
      ></div>

      {images.length > 1 && (
        <>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition-all z-10">
            <FaChevronLeft onClick={prevSlide} size={20} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer hover:bg-black/70 transition-all z-10">
            <FaChevronRight onClick={nextSlide} size={20} />
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`transition-all w-2 h-2 rounded-full cursor-pointer ${
                  currentIndex === slideIndex ? "bg-white p-1" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Projects = () => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.disconnect(); };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-project {
            animation: fadeInUp 0.8s ease-out forwards;
          }

          .opacity-0-start {
             opacity: 0;
          }
        `}
      </style>

      <section id="projects" ref={sectionRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2 className={`text-4xl font-bold text-white mb-16 text-center ${isVisible ? "animate-project" : "opacity-0-start"}`} style={{ animationDelay: '0.2s' }}>
            My Projects
          </h2>

          <div className="flex flex-col gap-24">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col md:flex-row gap-10 items-center ${isVisible ? "animate-project" : "opacity-0-start"}`}
                style={{ animationDelay: `${0.4 + (index * 0.2)}s` }}
              >
                
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="text-slate-400 space-y-1">
                    <p><span className="font-semibold text-slate-200">Role:</span> {project.role}</p>
                    <p>
                      <span className="font-semibold text-slate-200">Repository:</span>{" "}
                      {project.repoLink ? (
                        <a href={project.repoLink} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline inline-flex items-center gap-1 hover:text-blue-300 transition-colors">
                          Link <FaExternalLinkAlt size={12}/>
                        </a>
                      ) : (
                        project.repo
                      )}
                    </p>
                    <p><span className="font-semibold text-slate-200">Status:</span> {project.status}</p>
                  </div>

                  <p className="text-slate-400 leading-relaxed text-justify">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-medium px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors cursor-default"
                          >
                              {t}
                          </span>
                      ))}
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                    <ImageSlider images={project.images} />
                </div>

              </div>
            ))}
          </div>

          <div className={`mt-24 flex flex-col items-center justify-center ${isVisible ? "animate-project" : "opacity-0-start"}`} style={{ animationDelay: '1.2s' }}>
              <p className="text-slate-400 mb-6 text-lg">Interested in seeing more of my work?</p>
              
              <a 
                href="https://github.com/arizzira?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-800 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:bg-indigo-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] border border-slate-700 hover:border-indigo-500"
              >
                  <FaGithub className="text-2xl" />
                  <span className="text-lg">Visit My Other Repositories</span>
                  <FaArrowRight className="text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;
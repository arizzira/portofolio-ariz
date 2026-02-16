import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaArrowRight, FaLayerGroup } from "react-icons/fa";

// Import Gambar (Tetap sama)
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
  // ... Data Projects tetap sama ...
  {
    id: 1,
    title: "NeuraMaint",
    subtitle: "AI Predictive Machine Copilot",
    role: "UI/UX & Front-End",
    repo: "Private Organization",
    isPrivate: true,
    desc: "An AI-powered predictive maintenance dashboard used to assist technicians in monitoring and forecasting machine health. I designed the UI/UX and developed the frontend interface.",
    images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7],
    tech: ["React", "Tailwind", "Vite", "Figma"]
  },
  {
    id: 2,
    title: "Travel Best Cirebon",
    subtitle: "Fullstack Booking Platform",
    role: "Fullstack Developer",
    repoLink: "https://github.com/arizzira/Web_Desain_Travel_Project",
    isPrivate: false,
    desc: "A complete travel booking website featuring responsive UI, admin panel, data management, and custom backend/API built with PHP. Developed fully from frontend design to backend architecture.",
    images: [p2_1, p2_2, p2_3, p2_4, p2_5],
    tech: ["React", "PHP", "MySQL", "Admin Panel"]
  },
  {
    id: 3,
    title: "Gesture Control",
    subtitle: "Computer Vision Experiment",
    role: "Python Developer",
    repoLink: "https://github.com/arizzira/Spotify-Controller-with-hand-gesture",
    isPrivate: false,
    desc: "An experimental project using Python and Mediapipe to detect specific hand gestures in real time. Demonstrates curiosity in computer vision and human-computer interaction.",
    images: [p3_1],
    tech: ["Python", "Mediapipe", "OpenCV"]
  }
];

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    // UBAH: bg-slate-200 di light mode
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden group shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-slate-900">
      
      <div 
        className="w-full h-full bg-center bg-cover transition-transform duration-700 ease-in-out hover:scale-105"
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      </div>

      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600 hover:scale-110"
          >
            <FaChevronLeft size={18} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-white backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-600 hover:scale-110"
          >
            <FaChevronRight size={18} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex === idx ? "bg-indigo-500 w-6" : "bg-white/40 hover:bg-white"
                }`}
              ></div>
            ))}
          </div>
        </>
      )}
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
    <section 
        id="projects" 
        ref={sectionRef} 
        // UBAH: Background terang di light mode
        className="py-24 bg-slate-50 dark:bg-slate-950 relative transition-colors duration-300"
    >
        
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className={`text-center mb-20 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium uppercase tracking-wider mb-4">
               <FaLayerGroup /> Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              A collection of projects where I've applied my skills in design, frontend, and backend development.
            </p>
          </div>

          <div className="flex flex-col gap-24">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex flex-col lg:flex-row gap-12 items-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ 
                    animationDelay: `${index * 0.2}s`,
                    flexDirection: index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row' // Alternating Layout
                }}
              >
                
                {/* Project Image Slider (Half Width) */}
                <div className="w-full lg:w-3/5 shadow-xl shadow-slate-200/50 dark:shadow-indigo-500/10 rounded-2xl">
                    <ImageSlider images={project.images} />
                </div>

                {/* Project Details (Half Width) */}
                <div className="w-full lg:w-2/5 space-y-6">
                  
                  <div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium text-lg">{project.subtitle}</p>
                  </div>

                  {/* UBAH: Deskripsi card jadi putih di light mode */}
                  <div className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-sm relative group hover:border-indigo-500/30 transition-colors shadow-sm dark:shadow-none">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.desc}
                      </p>
                  </div>

                  <div className="space-y-4">
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                              <span 
                                key={i} 
                                // UBAH: Badge style untuk light mode
                                className="text-xs font-semibold px-4 py-1.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-white transition-colors"
                              >
                                  {t}
                              </span>
                          ))}
                      </div>

                      {/* Info & Links */}
                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-white/10">
                          <span className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> {project.role}
                          </span>
                          
                          {project.isPrivate ? (
                             <span className="flex items-center gap-2 text-slate-400 dark:text-slate-500 cursor-not-allowed">
                                <FaGithub /> Private Repo
                             </span>
                          ) : (
                             <a 
                                href={project.repoLink} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="flex items-center gap-2 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium group"
                             >
                                <FaGithub /> View Code 
                                <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                             </a>
                          )}
                      </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Call to Action Footer */}
          <div className={`mt-32 text-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <a 
                href="https://github.com/arizzira?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-600/30"
              >
                  <FaGithub className="text-xl" />
                  See More on GitHub
                  <FaArrowRight />
              </a>
          </div>

        </div>
    </section>
  );
};

export default Projects;
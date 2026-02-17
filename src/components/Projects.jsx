import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight, FaArrowRight, FaExpand, FaMinus, FaTimes } from "react-icons/fa";

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
import p4_1 from '../assets/images/porto/porto4/1.png'
import p4_2 from '../assets/images/porto/porto4/2.png'
import p4_3 from '../assets/images/porto/porto4/3.png'
import p4_4 from '../assets/images/porto/porto4/4.png'
import p4_5 from '../assets/images/porto/porto4/5.png'
import p4_7 from '../assets/images/porto/porto4/7.png'
import p4_9 from '../assets/images/porto/porto4/9.png'
import p4_10 from '../assets/images/porto/porto4/10.png'
import p4_11 from '../assets/images/porto/porto4/11.png'
import p4_12 from '../assets/images/porto/porto4/12.png'
import p4_13 from '../assets/images/porto/porto4/13.png'
import p4_14 from '../assets/images/porto/porto4/14.png'
import p4_15 from '../assets/images/porto/porto4/15.png'
import p4_16 from '../assets/images/porto/porto4/16.png'
import p4_17 from '../assets/images/porto/porto4/17.png'
import p4_18 from '../assets/images/porto/porto4/18.png'
import p4_19 from '../assets/images/porto/porto4/19.png'

const projects = [
    {
    id: 4,
    title: "NeuraMaint",
    subtitle: "AI Predictive Machine Copilot",
    role: "UI/UX & Front-End",
    repo: "Private Organization",
    isPrivate: true,
    desc: "An AI-powered predictive maintenance dashboard. Designed the UI/UX and developed the frontend interface.",
    images: [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7],
    tech: ["React", "Tailwind", "Vite", "Figma"],
    color: "bg-[#a5b4fc]", 
    border: "border-indigo-900"
  },
  {
    id: 1,
    title: "SIAKSI",
    subtitle: "Sistem Aktivitas Kehadiran Dan Administrasi",
    role: "FullStack",
    repoLink: "https://siaksi.stikompoltekcirebon.ac.id",
    isPrivate: false,
    desc: "SIAKSI is an all-in-one digital platform that modernizes student governance through GPS-based attendance, automated administration, and AI-powered learning tools.",
    images: [p4_15, p4_2, p4_3, p4_4, p4_5, p4_7,p4_9, p4_10, p4_11, p4_12, p4_1, p4_16, p4_17, p4_18, p4_19],
    tech: ["React Vite","Postgresql", "Express.JS"],
    color: "bg-[#a5b4fc]", 
    border: "border-indigo-900"
  },
  {
    id: 2,
    title: "Travel Best",
    subtitle: "Fullstack Booking Platform",
    role: "Fullstack Developer",
    repoLink: "https://github.com/arizzira/Web_Desain_Travel_Project",
    isPrivate: false,
    desc: "A complete travel booking website featuring responsive UI, admin panel, data management, and custom backend/API built with PHP.",
    images: [p2_1, p2_2, p2_3, p2_4, p2_5],
    tech: ["React", "PHP", "MySQL", "Admin Panel"],
    color: "bg-[#67e8f9]", 
    border: "border-cyan-900"
  },
  {
    id: 3,
    title: "Gesture Ctrl",
    subtitle: "Computer Vision Experiment",
    role: "Python Developer",
    repoLink: "https://github.com/arizzira/Spotify-Controller-with-hand-gesture",
    isPrivate: false,
    desc: "Experimental project using Python and Mediapipe to detect specific hand gestures in real time.",
    images: [p3_1],
    tech: ["Python", "Mediapipe", "OpenCV"],
    color: "bg-[#fdba74]", 
    border: "border-orange-900"
  }
];

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full min-h-[250px] md:min-h-[350px] bg-black group overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white/20">
      
      <div 
        className="w-full h-full bg-center bg-cover transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              onClick={prevSlide}
              className="p-2 bg-white border-2 border-black text-black hover:bg-[#ff90e8] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <FaChevronLeft size={16} />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 bg-white border-2 border-black text-black hover:bg-[#ff90e8] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
            >
              <FaChevronRight size={16} />
            </button>
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-2 h-2 border border-black rounded-full cursor-pointer transition-all ${
                  currentIndex === idx ? "bg-black scale-125" : "bg-transparent hover:bg-black/20"
                }`}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// Komponen Kartu Project (Sticky Card)
const ProjectCard = ({ project, index }) => {
  return (
    // PERBAIKAN: Hapus h-screen, gunakan min-h-screen agar konten tidak memaksa scroll panjang
    // sticky top disesuaikan agar menumpuk rapi
    <div 
      className="sticky top-0 flex items-center justify-center pt-24 pb-12" 
      style={{ 
        // Logic Stack: Setiap kartu turun 40px dari atas.
        top: `calc(100px + ${index * 40}px)`,
        // Hapus marginBottom dinamis yang bikin gap jauh
      }}
    >
      <motion.div 
        initial={{ y: 50, opacity: 0 }} // Animasi masuk lebih halus
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "circOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full max-w-5xl mx-auto"
      >
        {/* === THE WINDOW FRAME (Brutalist Container) === */}
        <div className="bg-white dark:bg-[#121212] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col overflow-hidden">
          
          {/* 1. Window Header Bar */}
          <div className={`h-10 md:h-12 ${project.color} border-b-4 border-black dark:border-white flex items-center justify-between px-4 select-none`}>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-red-400 hover:bg-red-500 cursor-pointer flex items-center justify-center group"><FaTimes className="text-[6px] md:text-[8px] opacity-0 group-hover:opacity-100"/></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-yellow-400 hover:bg-yellow-500 cursor-pointer flex items-center justify-center group"><FaMinus className="text-[6px] md:text-[8px] opacity-0 group-hover:opacity-100"/></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-green-400 hover:bg-green-500 cursor-pointer flex items-center justify-center group"><FaExpand className="text-[6px] md:text-[8px] opacity-0 group-hover:opacity-100"/></div>
             </div>
             <div className="font-mono font-bold text-black uppercase tracking-widest text-xs md:text-sm truncate px-4">
                {project.title}.exe
             </div>
             {/* Striped Pattern decorative */}
             <div className="w-16 h-full opacity-20 bg-[repeating-linear-gradient(45deg,#000,#000_5px,transparent_5px,transparent_10px)] hidden sm:block"></div>
          </div>

          {/* 2. Window Body */}
          <div className="flex flex-col lg:flex-row h-full">
            
            {/* Left: Image Slider */}
            <div className="w-full lg:w-3/5 bg-zinc-100 dark:bg-black">
               <ImageSlider images={project.images} />
            </div>

            {/* Right: Content Info */}
            <div className="w-full lg:w-2/5 p-6 md:p-8 flex flex-col justify-between gap-6 bg-white dark:bg-[#121212]">
               
               <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-black uppercase bg-black text-white dark:bg-white dark:text-black mb-2">
                        {project.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase leading-none">
                        {project.title}
                    </h3>
                    <p className="font-mono text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-900 dark:text-slate-200 text-sm md:text-base leading-relaxed border-l-4 border-black dark:border-white pl-4">
                    {project.desc}
                  </p>
               </div>

               <div className="space-y-6">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-bold text-[10px] uppercase text-slate-400 mb-2 tracking-wider">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 bg-white dark:bg-zinc-800 border-2 border-black dark:border-white text-[10px] md:text-xs font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                          >
                              {t}
                          </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t-2 border-dashed border-slate-300 dark:border-zinc-700">
                      {project.isPrivate ? (
                         <div className="flex items-center gap-3 text-slate-400 dark:text-slate-600 font-bold cursor-not-allowed select-none">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-zinc-900">
                                <FaGithub className="text-lg" />
                            </div>
                            <span className="text-sm">SOURCE PRIVATE</span>
                         </div>
                      ) : (
                         <a 
                            href={project.repoLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="group flex items-center gap-3 w-full"
                         >
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black group-hover:bg-[#ff90e8] group-hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-active:translate-x-[2px] group-active:translate-y-[2px] group-active:shadow-none">
                                <FaGithub className="text-lg" />
                            </div>
                            <div className="flex-1 border-b-2 border-black dark:border-white pb-1 group-hover:border-[#ff90e8] transition-colors flex justify-between items-end">
                                <span className="font-black text-base uppercase text-black dark:text-white">View Source</span>
                                <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform text-black dark:text-white text-sm" />
                            </div>
                         </a>
                      )}
                  </div>
               </div>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#f4f3ef] dark:bg-[#050505] transition-colors duration-500">
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[size:40px_20px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] pointer-events-none z-0"></div>

        <div className="relative z-10 px-6 pt-24 pb-20">
          
          {/* Section Header */}
          <div className="max-w-7xl mx-auto mb-12 text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-8">
            <div>
                <div className="inline-block px-4 py-2 bg-black text-white font-mono font-bold uppercase mb-4 shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
                    // Portfolio.js
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-[0.9]">
                    Selected <br/> <span className="text-[#6366f1] underline decoration-4 decoration-black dark:decoration-white">Works.</span>
                </h2>
            </div>
            <div className="hidden md:block text-right">
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
                    Scroll down to explore <br/> the archive.
                </p>
                <div className="mt-4 flex justify-end gap-1">
                    <div className="w-2 h-2 bg-black dark:bg-white animate-bounce"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-black dark:bg-white animate-bounce delay-200"></div>
                </div>
            </div>
          </div>

          {/* STACKED PROJECTS CONTAINER */}
          <div className="flex flex-col w-full">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* View More Github */}
          <div className="max-w-7xl mx-auto mt-16 text-center">
             <a 
                href="https://github.com/arizzira?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-12 py-5 bg-[#ff90e8] border-4 border-black text-black font-black text-xl uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-y-1 active:shadow-none"
             >
                View All Repositories
             </a>
          </div>

        </div>
    </section>
  );
};

export default Projects;
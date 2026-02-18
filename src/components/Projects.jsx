import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaGithub, FaChevronLeft, FaChevronRight, FaArrowRight, FaExpand, FaMinus, FaTimes, FaFolderOpen } from "react-icons/fa";

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
import p4_1 from '../assets/images/porto/porto4/1.png';
import p4_2 from '../assets/images/porto/porto4/2.png';
import p4_3 from '../assets/images/porto/porto4/3.png';
import p4_4 from '../assets/images/porto/porto4/4.png';
import p4_5 from '../assets/images/porto/porto4/5.png';
import p4_7 from '../assets/images/porto/porto4/7.png';
import p4_9 from '../assets/images/porto/porto4/9.png';
import p4_10 from '../assets/images/porto/porto4/10.png';
import p4_11 from '../assets/images/porto/porto4/11.png';
import p4_12 from '../assets/images/porto/porto4/12.png';
import p4_15 from '../assets/images/porto/porto4/15.png';
import p4_16 from '../assets/images/porto/porto4/16.png';
import p4_17 from '../assets/images/porto/porto4/17.png';
import p4_18 from '../assets/images/porto/porto4/18.png';
import p4_19 from '../assets/images/porto/porto4/19.png';

const projects = [
    {
    id: 4,
    title: "NeuraMaint",
    subtitle: "AI Predictive Machine Copilot",
    role: "UI/UX & Front-End",
    repoLink: "#",
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
    subtitle: "Sistem Aktivitas Kehadiran",
    role: "FullStack",
    repoLink: "https://siaksi.stikompoltekcirebon.ac.id",
    isPrivate: false,
    desc: "SIAKSI is an all-in-one digital platform that modernizes student governance through GPS-based attendance, automated administration, and AI-powered learning tools.",
    images: [p4_15, p4_2, p4_3, p4_4, p4_5, p4_7, p4_9, p4_10, p4_11, p4_12, p4_1, p4_16, p4_17, p4_18, p4_19],
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

const MarqueeText = ({ children, direction = 1 }) => {
    return (
      <div className="flex overflow-hidden whitespace-nowrap opacity-[0.04] dark:opacity-[0.05] select-none absolute top-0 w-full pointer-events-none z-0">
        <motion.div
          className="flex gap-10 text-[10rem] md:text-[15rem] font-black uppercase text-black dark:text-white leading-none"
          animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i}>{children}</span>
          ))}
        </motion.div>
      </div>
    );
};

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
    <div className="relative w-full aspect-video md:h-full bg-zinc-200 dark:bg-zinc-800 group overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black dark:border-white/20">
      <div 
        className="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }} 
      >
      </div>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto p-2 bg-white/80 backdrop-blur-sm border-2 border-black text-black hover:bg-[#ff90e8] transition-colors shadow-sm active:scale-95"
            >
              <FaChevronLeft size={14} />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto p-2 bg-white/80 backdrop-blur-sm border-2 border-black text-black hover:bg-[#ff90e8] transition-colors shadow-sm active:scale-95"
            >
              <FaChevronRight size={14} />
            </button>
          </div>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 bg-white/80 backdrop-blur-sm border border-black rounded-full shadow-sm">
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 md:w-2 md:h-2 border border-black rounded-full cursor-pointer transition-all ${
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

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="relative md:sticky top-0 flex items-center justify-center py-6 md:pt-24 md:pb-12" 
      style={{ zIndex: index + 10 }}
    >
      <motion.div 
        initial={{ y: 100, scale: 0.9, opacity: 0 }}
        whileInView={{ y: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
        className="relative w-full max-w-5xl mx-auto"
        style={{ top: `calc(50px + ${index * 20}px)` }}
      >
        <div className="bg-white dark:bg-[#121212] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col overflow-hidden">
          
          <div className={`h-10 md:h-12 ${project.color} border-b-4 border-black dark:border-white flex items-center justify-between px-4 select-none relative overflow-hidden`}>
             <div className="flex items-center gap-2 z-10">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-red-400"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-yellow-400"></div>
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-green-400"></div>
             </div>
             
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="px-4 py-1 bg-black/10 dark:bg-black/20 font-mono font-bold text-black uppercase tracking-widest text-[10px] md:text-sm">
                    {project.title}.exe
                 </div>
             </div>

             <div className="w-8 h-8 flex items-center justify-center z-10 opacity-50">
                <FaFolderOpen className="text-black text-lg" />
             </div>
          </div>

          <div className="flex flex-col lg:flex-row h-full">
            <div className="w-full lg:w-3/5 bg-zinc-100 dark:bg-black border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white">
               <ImageSlider images={project.images} />
            </div>

            <div className="w-full lg:w-2/5 p-6 md:p-8 flex flex-col gap-6 bg-white dark:bg-[#121212]">
               <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-black uppercase bg-black text-white dark:bg-white dark:text-black mb-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
                        {project.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white uppercase leading-none mb-1">
                        {project.title}
                    </h3>
                    <p className="font-mono text-xs md:text-sm text-slate-500 dark:text-slate-400">
                        {project.subtitle}
                    </p>
                  </div>
                  <p className="text-slate-900 dark:text-slate-200 text-sm md:text-base leading-relaxed border-l-4 border-black dark:border-white pl-4">
                    {project.desc}
                  </p>
               </div>

               <div className="mt-auto space-y-6">
                  <div>
                    <h4 className="font-bold text-[10px] uppercase text-slate-400 mb-2 tracking-wider flex items-center gap-2">
                        Tech Stack <span className="h-px bg-slate-300 flex-1"></span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-white dark:bg-zinc-800 border-2 border-black dark:border-white text-[10px] md:text-xs font-bold uppercase cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:bg-yellow-200 dark:hover:bg-indigo-600 transition-colors">
                              {t}
                          </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-dashed border-slate-300 dark:border-zinc-700">
                      {project.isPrivate ? (
                         <div className="flex items-center gap-3 text-slate-400 dark:text-slate-600 font-bold cursor-not-allowed select-none bg-slate-100 dark:bg-zinc-900 p-3 border-2 border-slate-300 dark:border-slate-700 grayscale opacity-70">
                            <FaGithub className="text-lg" />
                            <span className="text-sm">SOURCE PRIVATE</span>
                         </div>
                      ) : (
                         <a href={project.repoLink} target="_blank" rel="noreferrer" className="group flex items-center gap-3 w-full p-1">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black group-hover:bg-[#ff90e8] group-hover:text-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-active:translate-x-[1px] group-active:translate-y-[1px] group-active:shadow-none">
                                <FaGithub className="text-lg" />
                            </div>
                            <div className="flex-1 border-b-2 border-black dark:border-white pb-1 group-hover:border-[#ff90e8] transition-colors flex justify-between items-end">
                                <span className="font-black text-sm md:text-base uppercase text-black dark:text-white">View Source</span>
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
    <section id="projects" className="relative bg-[#f4f3ef] dark:bg-[#050505] transition-colors duration-500 overflow-hidden border-t-2 border-black dark:border-white/20">
        
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] pointer-events-none z-0"></div>
        
        <div className="absolute top-[10%] w-full">
            <MarqueeText>WORK • BUILD • SHIP • </MarqueeText>
        </div>
        
        <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-20 -right-20 w-64 h-64 border-[10px] border-dashed border-black/5 dark:border-white/5 rounded-full z-0 pointer-events-none"
        ></motion.div>

        <div className="relative z-10 px-6 pt-16 md:pt-24 pb-20">
          
          <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row items-end justify-between gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="inline-block px-4 py-2 bg-black text-white font-mono font-bold uppercase mb-4 shadow-[4px_4px_0px_0px_#22c55e]">
                   Archive
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-[0.9]">
                    Selected <br/> <span className="text-[#6366f1] underline decoration-4 decoration-black dark:decoration-white">Works.</span>
                </h2>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden md:block text-right"
            >
                <p className="font-mono text-sm font-bold text-slate-500 dark:text-slate-400">
                    FEATURED PROJECTS <br/> {new Date().getFullYear()} COLLECTION
                </p>
            </motion.div>
          </div>

          <div className="flex flex-col w-full">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="max-w-7xl mx-auto mt-30
           text-center">
             <a 
                href="https://github.com/arizzira?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-8 py-4 md:px-12 md:py-5 bg-[#ff90e8] border-4 border-black text-black font-black text-lg md:text-xl uppercase shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] transition-all active:translate-y-1 active:shadow-none"
             >
                View All Repositories
             </a>
          </div>

        </div>
    </section>
  );
};

export default Projects;
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaEnvelope, FaDownload } from "react-icons/fa";
import profileImg from "../assets/images/profile/profile.png";
import cvFile from "../assets/cv-ariz.pdf"; 

const Hero = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const xMove = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-28 pb-10 bg-white dark:bg-[#050505] transition-colors duration-500"
    >
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-40 dark:opacity-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="absolute inset-0 opacity-0 dark:opacity-100 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        <motion.div 
          style={{ x: xMove }}
          className="absolute top-[20%] -left-[10%] whitespace-nowrap text-[15vw] font-black uppercase leading-none text-slate-100 dark:text-white/5 select-none"
        >
          CREATIVE DEV
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center relative z-10">
        
        <div className="flex flex-col gap-6 order-2 lg:order-1 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border border-black"></span>
              </span>
              <span className="font-bold font-mono text-xs tracking-wider uppercase text-black dark:text-white">
                Available for Projects
              </span>
            </div>
          </motion.div>

          <div className="relative z-20">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl font-black leading-[0.9] tracking-tighter"
            >
              <span className="text-black dark:text-white">FULLSTACK</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400 stroke-black dark:stroke-white stroke-2 md:stroke-0">
                ENGINEER
              </span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-medium text-slate-800 dark:text-zinc-300 max-w-lg leading-relaxed border-l-4 border-black dark:border-indigo-500 pl-6"
          >
            Hi, I'm <strong>Muhammad Ariz</strong>. I craft <span className="bg-yellow-300 dark:bg-indigo-600 px-1 border border-black dark:border-transparent text-black dark:text-white">high-performance</span> web experiences with modern technologies and clean code.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a 
              href={cvFile} 
              download 
              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-sm md:text-base hover:-translate-y-1 transition-all border-2 border-transparent shadow-[6px_6px_0px_0px_#818cf8] dark:shadow-[6px_6px_0px_0px_#4f46e5] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
            >
               <span className="flex items-center gap-2">
                 <FaDownload /> Download CV
               </span>
            </a>
            
            <div className="flex gap-3">
                <SocialBtn href="https://github.com/arizzira" icon={<FaGithub />} label="GitHub" />
                <SocialBtn href="https://www.linkedin.com/in/muhammad-ariz-77949a277/" icon={<FaLinkedin />} label="LinkedIn" />
                <SocialBtn href="mailto:arizgg6@gmail.com" icon={<FaEnvelope />} label="Email" />
            </div>
          </motion.div>
        </div>

        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }} 
               animate={{ scale: 1, opacity: 1 }}
               transition={{ type: "spring", duration: 0.8 }}
               className="relative z-10 cursor-pointer group w-[280px] md:w-[350px] lg:w-[400px] aspect-[4/5]"
            >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 border-2 border-black rounded-full z-20 flex items-center justify-center dark:hidden">
                    <FaArrowDown className="-rotate-45 text-black" />
                </div>
                <div className="absolute inset-0 bg-black dark:bg-indigo-600 translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5 border-2 border-black dark:border-none transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="absolute inset-0 bg-white dark:bg-zinc-800 border-4 border-black dark:border-white overflow-hidden">
                    <img 
                      src={profileImg} 
                      alt="Muhammad Ariz" 
                      className="w-full h-full object-cover object-top grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" 
                    />
                </div>
            </motion.div>
        </div>

      </div>

      {/* --- SCROLL DOWN INDICATOR (PERBAIKAN) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }} 
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30" // Tambahkan z-30 dan naikkan bottom-8
      >
         {/* Garis Indikator */}
         <div className="w-[2px] h-12 bg-gradient-to-b from-transparent via-black dark:via-white to-transparent"></div>
         
         {/* Teks Scroll */}
         <span className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white bg-white/50 dark:bg-black/50 px-2 rounded-full backdrop-blur-sm">
            Scroll
         </span>
      </motion.div>
      {/* ----------------------------------------- */}

    </section>
  );
};

const SocialBtn = ({ href, icon, label }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={label}
      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white dark:bg-black border-2 border-black dark:border-white text-xl md:text-2xl text-black dark:text-white hover:bg-yellow-300 dark:hover:bg-indigo-600 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
    >
        {icon}
    </a>
)

export default Hero;
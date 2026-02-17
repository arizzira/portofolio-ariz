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
      // PERBAIKAN 1: Ukuran tinggi dikurangi dari 110vh ke min-h-screen (standar) atau auto
      // PERBAIKAN 2: Background light mode jadi Putih (bg-white) biar jelas aktifnya
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 pt-28 pb-10 bg-white dark:bg-[#050505] transition-colors duration-500"
    >
      
      {/* Background Dynamic */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern: Lebih halus di light mode */}
        <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        
        {/* Marquee Text: Ukuran font dikurangi dari 18vw ke 12vw */}
        <motion.div 
          style={{ x: xMove }}
          className="absolute top-[15%] -left-[5%] whitespace-nowrap text-[12vw] font-black uppercase leading-none text-slate-200/40 dark:text-white/5 select-none"
        >
          CREATIVE DEVELOPER CREATIVE DEVELOPER
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center relative z-10">
        
        {/* === LEFT: TEXT CONTENT === */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 relative">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-fit"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-zinc-900 border border-slate-300 dark:border-white shadow-sm dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-full lg:rounded-none lg:border-2 lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-black/10"></span>
              </span>
              <span className="font-bold font-mono text-xs tracking-wider uppercase text-slate-900 dark:text-white">
                Open for Work
              </span>
            </div>
          </motion.div>

          {/* Headline: Ukuran font dikurangi agar "sedang" */}
          <div className="relative z-20">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // PERBAIKAN: Font size dikecilkan (text-5xl -> text-7xl)
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-white"
            >
              FULLSTACK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400">
                ENGINEER
              </span>
            </motion.h1>
          </div>

          {/* Deskripsi: Ukuran font disesuaikan */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg font-medium text-slate-700 dark:text-zinc-300 max-w-lg leading-relaxed border-l-4 border-indigo-500 pl-5"
          >
            Hi, I'm <strong>Muhammad Ariz</strong>. Transforming abstract ideas into <span className="bg-yellow-200 dark:bg-indigo-600 px-1 text-slate-900 dark:text-white rounded-sm">high-performance</span> web applications.
          </motion.p>

          {/* Buttons Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-3 mt-2"
          >
            <a 
              href={cvFile} 
              download 
              // PERBAIKAN: Tombol di Light Mode jadi Hitam solid agar kontras
              className="group relative px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold uppercase text-sm md:text-base hover:-translate-y-0.5 hover:shadow-lg transition-all border-2 border-transparent rounded-lg lg:rounded-none lg:hover:shadow-none lg:shadow-[6px_6px_0px_0px_#6366f1]"
            >
               <span className="flex items-center gap-2">
                 <FaDownload /> Download CV
               </span>
            </a>
            
            <div className="flex gap-2">
                <SocialBtn href="https://github.com/arizzira" icon={<FaGithub />} label="GitHub" />
                <SocialBtn href="https://linkedin.com/in/muhammad-ariz" icon={<FaLinkedin />} label="LinkedIn" />
                <SocialBtn href="mailto:arizgg6@gmail.com" icon={<FaEnvelope />} label="Email" />
            </div>
          </motion.div>
        </div>

        {/* === RIGHT: IMAGE (UKURAN SEDANG) === */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end items-center">
            
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }} 
               animate={{ scale: 1, opacity: 1 }}
               transition={{ type: "spring", duration: 0.8 }}
               // PERBAIKAN: Ukuran container gambar dibatasi (max-w-[380px] di desktop)
               className="relative w-[280px] h-[350px] md:w-[320px] md:h-[400px] lg:w-[380px] lg:h-[480px] z-10 cursor-pointer group"
            >
                {/* Decorative Shapes */}
                <div className="absolute top-6 -left-6 w-full h-full border-2 lg:border-4 border-slate-900 dark:border-white bg-transparent z-0 transition-all duration-300 group-hover:top-4 group-hover:-left-4"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/30 rounded-full blur-[60px] z-0"></div>

                {/* Main Image Frame */}
                <div className="w-full h-full bg-white dark:bg-zinc-800 border-2 lg:border-4 border-slate-900 dark:border-white overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)] dark:shadow-[8px_8px_0px_0px_#4f46e5]">
                    <img 
                      src={profileImg} 
                      alt="Muhammad Ariz" 
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
            </motion.div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }} 
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
         <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-white/50">Scroll</span>
         <FaArrowDown className="text-slate-400 dark:text-white text-sm" />
      </motion.div>
    </section>
  );
};

const SocialBtn = ({ href, icon, label }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      aria-label={label}
      // PERBAIKAN: Warna tombol disesuaikan agar terlihat di mode terang
      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-black border border-slate-300 lg:border-2 lg:border-black dark:border-white text-xl text-slate-900 dark:text-white hover:bg-yellow-300 dark:hover:bg-indigo-600 transition-all shadow-sm lg:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] lg:hover:shadow-none lg:hover:translate-x-[2px] lg:hover:translate-y-[2px] rounded-lg lg:rounded-none"
    >
        {icon}
    </a>
)

export default Hero;
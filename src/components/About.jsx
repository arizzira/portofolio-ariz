import React from 'react';
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";

const About = () => {
  // Variabel untuk animasi stagger (muncul berurutan)
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "backOut" } }
  };

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-[#050505] border-t-4 border-black dark:border-white transition-colors duration-500 overflow-hidden">
        
        {/* 1. Background Grid Pattern (Konsisten dengan section lain) */}
        <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] pointer-events-none z-0"></div>

        {/* Dekorasi Garis Kiri (Animated) */}
        <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-6 md:left-10 w-4 bg-[#f0f0f0] dark:bg-zinc-900 border-x-2 border-black dark:border-white/20 hidden md:block z-0"
        ></motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-16 md:pl-20"
            >
                <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-4 py-1 font-bold uppercase tracking-widest text-lg mb-4 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(168,85,247,1)]">
                    About Me
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-black dark:text-white leading-tight">
                    SOLVING PUZZLES <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400 stroke-black dark:stroke-white stroke-1">
                        WITH ELEGANT CODE.
                    </span>
                </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:pl-20">
                
                {/* Column 1: Narrative (Text Box) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 bg-[#fffd87] dark:bg-zinc-800 p-8 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative"
                >
                    {/* Hiasan Pin Kertas */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 border-2 border-black"></div>

                    <p className="text-base md:text-lg font-mono font-medium text-black dark:text-white leading-loose text-justify">
                        Hello! I'm <strong className="bg-white dark:bg-black px-1 border border-black dark:border-white">Muhammad Ariz</strong>. 
                        My journey started with a simple "Hello World" and evolved into a relentless pursuit of building 
                        robust full-stack ecosystems.
                    </p>
                    <br />
                    <p className="text-base md:text-lg font-mono font-medium text-black dark:text-white leading-loose text-justify">
                        Currently rocking as a <span className="bg-indigo-500 text-white px-1 border border-black dark:border-none">UI/UX & Frontend Dev</span> 
                        for the Capstone Project at <strong>Dicoding x Accenture</strong>. 
                        Also a Linux enthusiast (Ubuntu gang 🐧) and architecture geek.
                    </p>
                </motion.div>

                {/* Column 2: Stacked Cards (Staggered Animation) */}
                <motion.div 
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="lg:col-span-5 flex flex-col gap-6"
                >
                    
                    {/* Education Card */}
                    <motion.div variants={itemVars} className="group bg-white dark:bg-black p-6 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-xl font-black text-black dark:text-white uppercase group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Education</h4>
                                <p className="text-sm font-bold text-zinc-500 mt-1">STIKOM Poltek Cirebon</p>
                                <p className="text-[10px] md:text-xs font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-2 py-1 mt-2 w-fit text-black dark:text-white">Informatics Engineering</p>
                            </div>
                            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 border-2 border-black dark:border-white rounded-md">
                                <FaGraduationCap className="text-2xl text-black dark:text-white" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Card */}
                    <motion.div variants={itemVars} className="group bg-[#ff90e8] p-6 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                        <div className="flex items-start justify-between">
                            <div>
                                <h4 className="text-xl font-black text-black uppercase">Experience</h4>
                                <p className="text-sm font-bold text-black/80 mt-1">Dicoding x Accenture</p>
                                <p className="text-[10px] md:text-xs font-mono bg-black text-white px-2 py-1 mt-2 w-fit border border-black">Capstone Project</p>
                            </div>
                            <div className="p-3 bg-white border-2 border-black rounded-md">
                                <FaBriefcase className="text-2xl text-black" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Focus */}
                    <motion.div variants={itemVars} className="group bg-cyan-300 p-6 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                             <div className="p-2 bg-black text-white rounded-sm">
                                <FaCode className="text-xl" />
                             </div>
                             <h4 className="text-xl font-black text-black uppercase">Current Focus</h4>
                        </div>
                        <p className="font-mono font-bold text-xs md:text-sm text-black leading-relaxed">
                            React, Vite, Tailwind, PostgreSQL, and currently diving into Golang.
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </div>
    </section>
  );
};

export default About;
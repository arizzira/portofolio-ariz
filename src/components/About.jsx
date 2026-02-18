import React from 'react';
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode, FaTerminal, FaBolt, FaPuzzlePiece, FaUserSecret } from "react-icons/fa";

const MarqueeText = ({ children, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.04] dark:opacity-[0.05] select-none absolute top-20 w-full pointer-events-none z-0">
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

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white dark:bg-[#050505] border-t-2 border-black dark:border-white/20 overflow-hidden transition-colors duration-500">
        
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] pointer-events-none z-0"></div>
        
        <MarqueeText>CREATIVE • LOGIC • DESIGN • </MarqueeText>

        <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-[-5%] md:right-10 text-[10rem] text-black/5 dark:text-white/5 font-black z-0 pointer-events-none"
        >
            ?
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col items-center text-center"
            >
                <div className="inline-block px-4 py-2 bg-black text-white font-mono font-bold uppercase mb-4 shadow-[4px_4px_0px_0px_#fbbf24] transform -rotate-2">
                    Discover Me
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-none">
                    Behind The <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-cyan-400 dark:to-indigo-400 stroke-black dark:stroke-white stroke-2">
                        Code Editor
                    </span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 flex flex-col h-full"
                >
                    <div className="flex-grow group relative bg-white dark:bg-[#121212] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-all duration-300">
                        
                        <div className="bg-black dark:bg-white px-4 py-3 flex items-center justify-between border-b-4 border-black dark:border-white">
                            <span className="font-mono text-white dark:text-black font-bold uppercase text-xs md:text-sm tracking-widest">user_bio.txt</span>
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 border-2 border-white dark:border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 border-2 border-white dark:border-black"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-black"></div>
                            </div>
                        </div>

                        <div className="p-6 md:p-10 relative overflow-hidden">
                             <FaTerminal className="absolute bottom-[-20px] right-[-20px] text-[12rem] opacity-[0.03] dark:opacity-[0.05] text-black dark:text-white transform rotate-12 pointer-events-none" />
                             
                             <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-3 text-black dark:text-white">
                                    <span className="bg-yellow-300 dark:bg-indigo-600 px-3 py-1 border-4 border-black dark:border-white text-lg md:text-xl transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">HELLO</span>
                                    I'm Ariz.
                                </h3>

                                <div className="space-y-6 text-base md:text-lg font-mono font-medium text-slate-800 dark:text-slate-300 leading-loose text-justify">
                                    <p>
                                        My coding journey wasn't a straight line. It started with curiosity (<span className="italic">"How does this button work?"</span>) and turned into an obsession with building digital ecosystems.
                                    </p>
                                    <p>
                                        I don't just write code; I <span className="bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold">solve puzzles</span>. From pixel-perfect frontends to robust backend logic, I thrive on the challenge of making complex things feel simple.
                                    </p>
                                    
                                    <div className="pt-6 mt-6 border-t-2 border-dashed border-black/20 dark:border-white/20">
                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center gap-2">
                                                <FaBolt className="text-yellow-500 text-xl" />
                                                <span className="text-sm font-bold uppercase">Fast Learner</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaUserSecret className="text-indigo-500 text-xl" />
                                                <span className="text-sm font-bold uppercase">Problem Solver</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaTerminal className="text-green-500 text-xl" />
                                                <span className="text-sm font-bold uppercase">Linux User</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- RIGHT COLUMN: BENTO GRID CARDS --- */}
                <div className="lg:col-span-5 grid grid-cols-1 gap-6">
                    
                    {/* 1. EXPERIENCE CARD */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
                        className="group relative bg-[#ff90e8] dark:bg-[#121212] border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaBriefcase className="text-7xl text-black dark:text-white" />
                        </div>
                        <h4 className="text-2xl font-black text-black dark:text-white uppercase mb-2">Experience</h4>
                        <div className="w-12 h-2 bg-black dark:bg-white mb-4"></div>
                        <p className="font-bold text-xl leading-tight text-black dark:text-white">Dicoding x Accenture</p>
                        <p className="font-mono text-sm font-semibold mt-1 text-black/80 dark:text-white/70">Capstone Project (Frontend Arch)</p>
                    </motion.div>

                    {/* 2. EDUCATION CARD */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                        className="group relative bg-cyan-300 dark:bg-indigo-900 border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default"
                    >
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <FaGraduationCap className="text-7xl text-black dark:text-white" />
                        </div>
                        <h4 className="text-2xl font-black text-black dark:text-white uppercase mb-2">Education</h4>
                        <div className="w-12 h-2 bg-black dark:bg-white mb-4"></div>
                        <p className="font-bold text-xl leading-tight text-black dark:text-white">STIKOM Poltek Cirebon</p>
                        <p className="font-mono text-sm font-semibold mt-1 text-black/80 dark:text-white/70">Informatics Engineering (D3)</p>
                    </motion.div>

                    {/* 3. TECH STACK (Horizontal Scroll-like visual) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.4 }}
                        className="group bg-white dark:bg-black border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all cursor-default"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-2xl font-black text-black dark:text-white uppercase">Current Stack</h4>
                            <FaPuzzlePiece className="text-2xl text-black dark:text-white animate-pulse" />
                        </div>
                        <div className="flex flex-wrap gap-2">
                             {['React', 'Tailwind', 'Vite', 'Golang', 'PostgreSQL'].map((tech) => (
                                <span key={tech} className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 font-mono text-xs font-bold border-2 border-transparent hover:bg-transparent hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors cursor-default">
                                    {tech}
                                </span>
                             ))}
                        </div>
                    </motion.div>

                </div>

            </div>
        </div>
    </section>
  );
};

export default About;
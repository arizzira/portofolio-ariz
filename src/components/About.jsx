import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaCode, FaBriefcase, FaServer } from "react-icons/fa";

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.disconnect(); };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      // UBAH: Background terang di light mode
      className="relative py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
        {/* UBAH: Blob warna disesuaikan transparansinya untuk light mode */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/20 rounded-full blur-[128px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-[128px] -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
            
            <div className={`mb-16 md:text-center max-w-3xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {/* UBAH: Warna accent lebih gelap di light mode agar terbaca */}
                <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">About Me</h2>
                
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    Transforming complex problems into <br className="hidden md:block"/> 
                    <span className="text-slate-500 dark:text-slate-500">elegant digital solutions.</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Column 1: Narrative Text */}
                {/* UBAH: Text slate-600 untuk light mode */}
                <div className={`space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-lg transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p>
                        Hello! I'm <span className="text-slate-900 dark:text-white font-semibold">Muhammad Ariz</span>, a final-year Informatics Engineering student. 
                        My journey in web development started with a curiosity about how things work on the internet, 
                        which has now evolved into a passion for building robust <span className="text-indigo-600 dark:text-indigo-400">full-stack applications</span>.
                    </p>
                    <p>
                        Recently, I contributed as a <span className="text-slate-900 dark:text-white font-semibold">UI/UX Designer & Front-End Developer</span> for a capstone project 
                        collaborated with <strong>Dicoding x Accenture</strong>. This experience honed my ability to merge aesthetic design with functional code.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new Linux distros (currently utilizing <span className="text-slate-900 dark:text-white">Ubuntu</span> as my daily driver), 
                        configuring my development environment, or learning about scalable system architecture.
                    </p>
                </div>

                {/* Column 2: Bento Grid / Stats Cards */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    
                    {/* Card 1: Education */}
                    {/* UBAH: bg-white + border-slate-200 + shadow-sm untuk light mode */}
                    <div className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 transition-all hover:-translate-y-1 group">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors">
                            <FaGraduationCap className="text-indigo-600 dark:text-indigo-400 group-hover:text-white" />
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Education</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">S1 Informatics Engineering<br/>STIKOM Poltek Cirebon</p>
                    </div>

                    {/* Card 2: Experience */}
                    <div className="p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 transition-all hover:-translate-y-1 group">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                            <FaBriefcase className="text-purple-600 dark:text-purple-400 group-hover:text-white" />
                        </div>
                        <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Experience</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Capstone Project<br/>Dicoding x Accenture</p>
                    </div>

                    {/* Card 3: Tech Focus (Wide Card) */}
                    <div className="sm:col-span-2 p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 transition-all hover:-translate-y-1 group">
                         <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-600/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                                <FaCode className="text-cyan-600 dark:text-cyan-400 group-hover:text-white" />
                            </div>
                            <span className="text-[10px] font-mono text-slate-500 border border-slate-300 dark:border-slate-700 px-2 py-1 rounded uppercase tracking-wider">Current Stack</span>
                         </div>
                        <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-2">Technical Focus</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            Building scalable web apps using <span className="text-slate-900 dark:text-white">React, Vite, TailwindCSS</span>, and <span className="text-slate-900 dark:text-white">PostgreSQL</span>. 
                            Currently exploring <span className="text-slate-900 dark:text-white">Golang</span> for high-performance backend services.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
};

export default About;
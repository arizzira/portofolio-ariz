import React from 'react';
import profileImg from "../assets/images/profile/profile.png"; 
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa"; 
import { HiOutlineMail } from "react-icons/hi";
import cvFile from "../assets/cv-ariz.pdf"; 

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      
      {/* Background Elements (Decorative Blobs) */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 dark:bg-purple-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* === Left Content: Text === */}
        <div className="space-y-8 text-center md:text-left">
            
            {/* Status Badge */}
            {/* UBAH: Background terang di light mode, transparan di dark mode */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 backdrop-blur-sm animate-slide-up">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-300 font-medium tracking-wide">Available for Freelance & Hires</span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
                {/* UBAH: Text hitam di light, putih di dark */}
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight animate-slide-up delay-100">
                    Hi, I'm <br/>
                    {/* Gradient Text tetap sama atau disesuaikan sedikit */}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
                        Muhammad Ariz
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light animate-slide-up delay-200">
                    Fullstack Developer & UI/UX Enthusiast
                </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed animate-slide-up delay-300">
                I build accessible, pixel-perfect, and performant web applications. 
                Currently focused on creating seamless digital experiences with 
                {/* Highlight text berubah warna */}
                <span className="text-slate-900 dark:text-white font-medium"> React</span> and <span className="text-slate-900 dark:text-white font-medium">PostgreSQL</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center animate-slide-up delay-500">
                <a 
                    href={cvFile} 
                    download="CV-Muhammad-Ariz.pdf"
                    className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all hover:scale-105 shadow-lg shadow-indigo-600/30"
                >
                    <FaDownload /> Download CV
                </a>
                
                <div className="flex gap-4">
                    <SocialLink href="https://github.com/arizzira" icon={<FaGithub />} />
                    <SocialLink href="https://linkedin.com/in/muhammad-ariz" icon={<FaLinkedin />} />
                    <SocialLink href="mailto:arizgg6@gmail.com" icon={<HiOutlineMail />} />
                </div>
            </div>
        </div>

        {/* === Right Content: Image & Floating Cards === */}
        <div className="relative flex justify-center md:justify-end animate-slide-up delay-300">
            
            {/* The Main Image Container */}
            <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[500px]">
                {/* UBAH: Abstract Background behind image jadi terang/gelap */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] rotate-3 border border-indigo-100 dark:border-white/5"></div>
                
                {/* Profile Image */}
                <img 
                    src={profileImg} 
                    alt="Muhammad Ariz" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-[110%] object-contain object-bottom drop-shadow-2xl z-10"
                    style={{
                         maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                         WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                    }}
                />

                {/* Floating Experience Card */}
                {/* UBAH: Card jadi putih solid di light mode agar terlihat diatas background putih/abu */}
                <div className="absolute top-10 -left-10 md:-left-16 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/20 p-4 rounded-xl shadow-xl z-20 animate-float">
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-500 p-2 rounded-lg text-white">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-300">Experience</p>
                            <p className="font-bold text-slate-900 dark:text-white">Fullstack Dev</p>
                        </div>
                    </div>
                </div>

                {/* Floating Tech Stack Card */}
                <div className="absolute bottom-20 -right-4 md:-right-10 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/20 p-4 rounded-xl shadow-xl z-20 animate-float delay-500">
                     <div className="text-center">
                        <p className="text-xs text-slate-500 dark:text-slate-300 mb-1">Current Stack</p>
                        <div className="flex gap-2 text-xl text-slate-900 dark:text-white">
                           <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                           <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                           <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

// Helper Component for Social Icons
// UBAH: Warna border dan text menyesuaikan tema
const SocialLink = ({ href, icon }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-300 dark:border-white/20 text-slate-600 dark:text-white hover:bg-indigo-600 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:-translate-y-1"
    >
        {icon}
    </a>
);

export default Hero;
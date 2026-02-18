import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaLaptopCode, FaCog } from "react-icons/fa";

import nodeLogo from '../assets/images/logoassets/Node.png';
import tailwindLogo from '../assets/images/logoassets/Tailwind.png';
import reactLogo from '../assets/images/logoassets/React.png';
import jsLogo from '../assets/images/logoassets/js.png';
import htmlLogo from '../assets/images/logoassets/HTML.png';
import cssLogo from '../assets/images/logoassets/CSS.png';
import mysqlLogo from '../assets/images/logoassets/MySQL.png';
import pmaLogo from '../assets/images/logoassets/PhpMyAdmin.png';
import vscodeLogo from '../assets/images/logoassets/VScode.png';
import postmanLogo from '../assets/images/logoassets/postmant.png';
import figmaLogo from '../assets/images/logoassets/figma.png';
import githubLogo from '../assets/images/logoassets/github.png';
import phpLogo from '../assets/images/logoassets/phpp.png';
import hapiLogo from '../assets/images/logoassets/hapi.png';
import pythonLogo from '../assets/images/logoassets/pythonn.png';

const MarqueeText = ({ children, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.04] dark:opacity-[0.05] select-none absolute top-32 w-full pointer-events-none z-0">
      <motion.div
        className="flex gap-10 text-[10rem] md:text-[15rem] font-black uppercase text-black dark:text-white leading-none"
        animate={{ x: direction === 1 ? [0, -1000] : [-1000, 0] }}
        transition={{ ease: "linear", duration: 60, repeat: Infinity }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i}>{children}</span>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      title: "FRONTEND",
      color: "bg-[#fca5a5]",
      icon: <FaCode />,
      desc: "Pixel Perfect",
      skills: [
        { name: "HTML5", img: htmlLogo },
        { name: "CSS3", img: cssLogo },
        { name: "JavaScript", img: jsLogo },
        { name: "React", img: reactLogo },
        { name: "Tailwind", img: tailwindLogo },
      ]
    },
    {
      title: "BACKEND",
      color: "bg-[#86efac]",
      icon: <FaServer />,
      desc: "Logic Core",
      skills: [
        { name: "Node.js", img: nodeLogo },
        { name: "MySQL", img: mysqlLogo },
        { name: "PhpMyAdmin", img: pmaLogo },
      ]
    },
    {
      title: "TOOLS",
      color: "bg-[#93c5fd]",
      icon: <FaTools />,
      desc: "Workflow",
      skills: [
        { name: "VS Code", img: vscodeLogo },
        { name: "Postman", img: postmanLogo },
        { name: "Figma", img: figmaLogo },
        { name: "GitHub", img: githubLogo },
      ]
    },
    {
      title: "LEARNING",
      color: "bg-[#fcd34d]",
      icon: <FaLaptopCode />,
      desc: "Next Step",
      skills: [
        { name: "PHP", img: phpLogo },
        { name: "Hapi", img: hapiLogo },
        { name: "Python", img: pythonLogo },
      ]
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-white dark:bg-[#050505] overflow-hidden transition-colors duration-500 border-t-2 border-black dark:border-white/20">
        
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] z-0 pointer-events-none"></div>
        
        <MarqueeText>STACK • TOOLS • CODE • </MarqueeText>

        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 text-[15rem] text-black/5 dark:text-white/5 z-0 pointer-events-none"
        >
            <FaCog />
        </motion.div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b-4 border-black dark:border-white pb-6 bg-white/50 dark:bg-black/50 backdrop-blur-sm p-4 md:p-0 md:bg-transparent">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse border border-black"></span>
                    <span className="font-mono text-xs font-bold uppercase text-slate-800 dark:text-slate-200">My Weapons</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase tracking-tighter leading-none">
                    TECH <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400 stroke-black dark:stroke-white stroke-2">
                        ARSENAL
                    </span>
                </h2>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex gap-1"
            >
                <div className="w-4 h-8 bg-black dark:bg-white transform skew-x-12 border border-transparent dark:border-black"></div>
                <div className="w-4 h-8 bg-black/50 dark:bg-white/50 transform skew-x-12 border border-black dark:border-transparent"></div>
                <div className="w-4 h-8 bg-black/20 dark:bg-white/20 transform skew-x-12 border border-black dark:border-white"></div>
            </motion.div>
          </div>

          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillsData.map((category, index) => (
              <motion.div 
                key={index}
                variants={itemVars}
                className="group relative bg-white dark:bg-[#121212] border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-200"
              >
                
                <div className={`${category.color} border-b-4 border-black dark:border-white p-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                        <div className="bg-white border-2 border-black p-2 rounded-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {React.cloneElement(category.icon, { className: "text-black text-lg" })}
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-black tracking-tighter uppercase">
                            {category.title}
                        </h3>
                    </div>
                    <span className="font-mono text-[10px] font-bold bg-black text-white px-2 py-1 uppercase border border-transparent dark:border-white transform rotate-2">
                        {category.desc}
                    </span>
                </div>

                <div className="p-6 grid grid-cols-3 sm:grid-cols-4 gap-6">
                    {category.skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 group/icon cursor-pointer">
                            
                            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center transition-all duration-200 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover/icon:shadow-none group-hover/icon:translate-x-[3px] group-hover/icon:translate-y-[3px] group-active/icon:bg-yellow-200 dark:group-active/icon:bg-indigo-900">
                                
                                <img 
                                    src={skill.img} 
                                    alt={skill.name} 
                                    className="h-8 md:h-9 w-auto object-contain grayscale-0 md:grayscale md:group-hover/icon:grayscale-0 transition-all duration-300" 
                                />
                            </div>
                            
                            <span className="text-[10px] font-bold font-mono text-black dark:text-white uppercase text-center opacity-100 md:opacity-0 md:group-hover/icon:opacity-100 transition-opacity duration-200 translate-y-0 md:translate-y-2 md:group-hover/icon:translate-y-0 bg-white/80 dark:bg-black/80 md:bg-transparent px-1 rounded-sm">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
    </section>
  );
};

export default Skills;
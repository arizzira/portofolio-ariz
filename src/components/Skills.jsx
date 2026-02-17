import React from 'react';
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools, FaLaptopCode } from "react-icons/fa";

// Import Gambar (Path tetap sama)
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

const Skills = () => {
  const skillsData = [
    {
      title: "FRONTEND",
      color: "bg-[#fca5a5]", // Red/Pink
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
      color: "bg-[#86efac]", // Green
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
      color: "bg-[#93c5fd]", // Blue
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
      color: "bg-[#fcd34d]", // Yellow
      icon: <FaLaptopCode />,
      desc: "Next Step",
      skills: [
        { name: "PHP", img: phpLogo },
        { name: "Hapi", img: hapiLogo },
        { name: "Python", img: pythonLogo },
      ]
    }
  ];

  // Variabel animasi untuk container (agar muncul berurutan)
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section id="skills" className="py-32 bg-white dark:bg-[#050505] relative overflow-hidden transition-colors duration-500">
        
        {/* Background Grid (Konsisten dengan Hero) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b-4 border-black dark:border-white pb-6">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase tracking-tighter mb-2">
                    Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400">Arsenal</span>
                </h2>
                <p className="text-lg font-mono text-slate-600 dark:text-zinc-400 pl-1">
                    // The weapons I choose for battle.
                </p>
            </motion.div>
            
            {/* Decoration Blocks */}
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex gap-2"
            >
                <div className="w-6 h-6 bg-[#fca5a5] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"></div>
                <div className="w-6 h-6 bg-[#fcd34d] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"></div>
                <div className="w-6 h-6 bg-[#93c5fd] border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"></div>
            </motion.div>
          </div>

          {/* Cards Grid with Staggered Animation */}
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
                className="group relative bg-white dark:bg-zinc-900/50 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200"
              >
                
                {/* Card Header (Colored Bar) */}
                <div className={`${category.color} border-b-4 border-black dark:border-white p-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                        <div className="bg-white border-2 border-black p-2 rounded-md text-black shadow-sm">
                            {category.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-black text-black tracking-wide uppercase">{category.title}</h3>
                    </div>
                    <span className="font-mono text-[10px] md:text-xs font-bold bg-black text-white px-2 py-1 uppercase hidden sm:block">
                        {category.desc}
                    </span>
                </div>

                {/* Skills Grid inside Card */}
                <div className="p-6 grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4">
                    {category.skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-3 group/icon">
                            
                            {/* Icon Box */}
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 dark:bg-zinc-800 border-2 border-black dark:border-white flex items-center justify-center transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover/icon:shadow-none group-hover/icon:translate-x-[2px] group-hover/icon:translate-y-[2px] group-hover/icon:bg-yellow-200 dark:group-hover/icon:bg-indigo-600">
                                <img 
                                    src={skill.img} 
                                    alt={skill.name} 
                                    className="h-7 md:h-8 w-auto object-contain grayscale group-hover/icon:grayscale-0 transition-all duration-300" 
                                />
                            </div>
                            
                            <span className="text-[10px] md:text-xs font-bold font-mono text-black dark:text-white uppercase text-center opacity-70 group-hover/icon:opacity-100 transition-opacity">
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
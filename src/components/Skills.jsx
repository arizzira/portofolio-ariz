import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaServer, FaTools, FaLaptopCode } from "react-icons/fa";

// Import Gambar (Sama seperti sebelumnya)
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillsData = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-cyan-600 dark:text-cyan-400 text-2xl" />,
      desc: "Building responsive & interactive UI",
      skills: [
        { name: "HTML5", img: htmlLogo },
        { name: "CSS3", img: cssLogo },
        { name: "JavaScript", img: jsLogo },
        { name: "React", img: reactLogo },
        { name: "Tailwind", img: tailwindLogo },
      ]
    },
    {
      title: "Backend & Database",
      icon: <FaServer className="text-indigo-600 dark:text-indigo-400 text-2xl" />,
      desc: "Server-side logic & data management",
      skills: [
        { name: "Node.js", img: nodeLogo },
        { name: "MySQL", img: mysqlLogo },
        { name: "PhpMyAdmin", img: pmaLogo },
      ]
    },
    {
      title: "Tools & Workflow",
      icon: <FaTools className="text-purple-600 dark:text-purple-400 text-2xl" />,
      desc: "Essential tools for development",
      skills: [
        { name: "VS Code", img: vscodeLogo },
        { name: "Postman", img: postmanLogo },
        { name: "Figma", img: figmaLogo },
        { name: "GitHub", img: githubLogo },
      ]
    },
    {
      title: "Currently Learning",
      icon: <FaLaptopCode className="text-emerald-600 dark:text-emerald-400 text-2xl" />,
      desc: "Expanding my tech stack",
      skills: [
        { name: "PHP", img: phpLogo },
        { name: "Hapi", img: hapiLogo },
        { name: "Python", img: pythonLogo },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.disconnect(); };
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      // UBAH: Background terang di light mode
      className="py-24 bg-slate-50 dark:bg-black relative overflow-hidden"
    >
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            {/* UBAH: Warna blob disesuaikan opacity-nya */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-200/50 dark:bg-indigo-900/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-200/50 dark:bg-cyan-900/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Proficiency</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A curated list of technologies I use to build robust and scalable digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((category, index) => (
              <div 
                key={index}
                // UBAH: Kartu putih solid + shadow di light mode
                className={`bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-8 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 group
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card Header */}
                <div className="flex items-start gap-4 mb-8 border-b border-slate-100 dark:border-white/5 pb-6">
                    <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl group-hover:bg-slate-200 dark:group-hover:bg-white/10 transition-colors">
                        {category.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{category.desc}</p>
                    </div>
                </div>

                {/* Skills Grid inside Card */}
                <div className="flex flex-wrap gap-4">
                    {category.skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 group/icon">
                            {/* UBAH: Kotak icon jadi slate-100 di light mode */}
                            <div className="w-14 h-14 bg-slate-50 dark:bg-black/40 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/5 group-hover/icon:border-indigo-500/30 transition-all duration-300 relative overflow-hidden shadow-sm dark:shadow-none">
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 opacity-0 group-hover/icon:opacity-100 transition-opacity blur-md"></div>
                                
                                <img 
                                    src={skill.img} 
                                    alt={skill.name} 
                                    className="h-8 w-auto object-contain relative z-10 group-hover/icon:scale-110 transition-transform duration-300" 
                                />
                            </div>
                            <span className="text-xs text-slate-600 dark:text-slate-500 font-medium group-hover/icon:text-indigo-600 dark:group-hover/icon:text-indigo-300 transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

        </div>
    </section>
  );
};

export default Skills;
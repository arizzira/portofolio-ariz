import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { MdEmail, MdOutlineContentCopy } from "react-icons/md";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "arizgg6@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050505] border-t-4 border-black dark:border-white relative overflow-hidden transition-colors duration-500">
        
        {/* 1. Background Grid Pattern (Agar konsisten dengan section lain) */}
        <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] pointer-events-none z-0"></div>

        {/* Decorative Background Letters */}
        <div className="absolute top-10 right-0 font-black text-[20rem] text-slate-100 dark:text-zinc-900/50 opacity-100 leading-none pointer-events-none select-none z-0">
            HI
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 border-2 border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-mono font-bold uppercase mb-4 shadow-[4px_4px_0px_0px_#6366f1]">
                    Start a Conversation
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase">
                    Let's Work <br/> <span className="text-indigo-600 dark:text-indigo-400">Together.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 1. Main Email Card (Brutalist Box) */}
                <div className="col-span-1 md:col-span-2 bg-white dark:bg-zinc-900 border-4 border-black dark:border-white rounded-xl p-8 md:p-12 text-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] relative">
                    
                    {/* Fake Window Dots */}
                    <div className="absolute top-4 left-4 flex gap-2 border-2 border-black dark:border-white px-2 py-1 rounded-full bg-white dark:bg-black">
                        <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                    </div>

                    <div className="flex justify-center mb-6 mt-4">
                        <div className="w-20 h-20 bg-[#6366f1] border-4 border-black text-white flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                            <FaPaperPlane />
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-black dark:text-white mb-2 uppercase">Shoot me an email</h3>
                    
                    <div className="flex flex-col sm:flex-row items-stretch gap-0 w-full max-w-lg mx-auto mt-8 border-4 border-black dark:border-white rounded-lg overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                        <div className="flex-1 px-6 py-4 bg-slate-50 dark:bg-zinc-800 flex items-center justify-between border-b-4 sm:border-b-0 sm:border-r-4 border-black dark:border-white">
                            <span className="text-black dark:text-white font-mono font-bold truncate">{email}</span>
                            <button 
                                onClick={handleCopyEmail}
                                className="ml-2 text-slate-400 hover:text-indigo-600 transition-colors"
                            >
                                {copied ? <span className="text-green-600 font-black text-xs">COPIED</span> : <MdOutlineContentCopy />}
                            </button>
                        </div>
                        <a 
                            href={`mailto:${email}`}
                            className="px-8 py-4 bg-[#6366f1] text-white font-black uppercase hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                        >
                            SEND <MdEmail />
                        </a>
                    </div>
                </div>

                {/* 2. Social & Location Cards */}
                
                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/muhammad-ariz-77949a277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0077b5] text-white p-6 border-4 border-black dark:border-white rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <FaLinkedin className="text-4xl text-white border-2 border-black p-1 bg-black rounded" />
                        <div>
                            <h4 className="font-black text-xl uppercase">LinkedIn</h4>
                            <p className="font-mono text-sm opacity-90">Connect Now</p>
                        </div>
                    </div>
                    <FaArrowRight className="text-2xl group-hover:-rotate-45 transition-transform duration-300" />
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com/arizzira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black dark:bg-zinc-800 text-white p-6 border-4 border-black dark:border-white rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-between"
                >
                    <div className="flex items-center gap-4">
                        <FaGithub className="text-4xl" />
                        <div>
                            <h4 className="font-black text-xl uppercase">GitHub</h4>
                            <p className="font-mono text-sm opacity-90">See Code</p>
                        </div>
                    </div>
                    <FaArrowRight className="text-2xl group-hover:-rotate-45 transition-transform duration-300" />
                </a>
            </div>

            {/* Location Badge */}
            <div className="mt-16 flex justify-center">
                <a 
                    href="https://goo.gl/maps/something" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full font-bold text-black dark:text-white hover:bg-yellow-300 dark:hover:bg-zinc-900 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
                >
                    <FaMapMarkerAlt className="text-red-500 text-xl" />
                    <span className="uppercase tracking-wide font-mono text-sm">Based in Majalengka, ID</span>
                </a>
            </div>

        </div>
    </section>
  );
};

export default Contact;
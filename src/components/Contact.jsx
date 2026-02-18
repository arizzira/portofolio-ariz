import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaArrowRight, FaEnvelopeOpenText } from "react-icons/fa";
import { MdEmail, MdOutlineContentCopy, MdCheck } from "react-icons/md";

const MarqueeText = ({ children, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.04] dark:opacity-[0.05] select-none absolute top-1/2 -translate-y-1/2 w-full pointer-events-none z-0">
      <motion.div
        className="flex gap-10 text-[10rem] md:text-[12rem] font-black uppercase text-black dark:text-white leading-none"
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

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "arizgg6@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white dark:bg-[#050505] border-t-2 border-black dark:border-white/20 overflow-hidden transition-colors duration-500">
        
        <div className="absolute inset-0 bg-[size:50px_50px] bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] pointer-events-none z-0"></div>

        <MarqueeText>LET'S TALK • HIRE ME • COLLAB • </MarqueeText>

        {/* 3. Floating Shape */}
        <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 text-[15rem] text-black/5 dark:text-white/5 z-0 pointer-events-none"
        >
            <FaEnvelopeOpenText />
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <div className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black font-mono font-bold uppercase mb-4 shadow-[4px_4px_0px_0px_#6366f1] transform -rotate-1">
                    Start a Conversation
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-black dark:text-white uppercase leading-none">
                    Let's Work <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400 stroke-black dark:stroke-white stroke-2">
                        Together.
                    </span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.4 }}
                    className="col-span-1 md:col-span-2 bg-white dark:bg-[#121212] border-4 border-black dark:border-white p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] relative"
                >
                    
                    <div className="absolute top-4 left-4 flex gap-2 border-2 border-black dark:border-white px-2 py-1 bg-white dark:bg-black">
                        <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                    </div>

                    <div className="flex justify-center mb-6 mt-4">
                        <div className="w-20 h-20 bg-[#6366f1] border-4 border-black text-white flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transform rotate-3">
                            <FaPaperPlane />
                        </div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-black dark:text-white mb-2 uppercase">Shoot me an email</h3>
                    
                    <div className="flex flex-col sm:flex-row items-stretch gap-0 w-full max-w-lg mx-auto mt-8 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all">
                        <div className="flex-1 px-6 py-4 bg-slate-50 dark:bg-zinc-800 flex items-center justify-between border-b-4 sm:border-b-0 sm:border-r-4 border-black dark:border-white">
                            <span className="text-black dark:text-white font-mono font-bold truncate">{email}</span>
                            <button 
                                onClick={handleCopyEmail}
                                className="ml-2 text-slate-400 hover:text-indigo-600 transition-colors p-2 hover:bg-black/5 rounded"
                                title="Copy Email"
                            >
                                {copied ? <MdCheck className="text-green-600 text-xl" /> : <MdOutlineContentCopy className="text-xl"/>}
                            </button>
                        </div>
                        <a 
                            href={`mailto:${email}`}
                            className="px-8 py-4 bg-[#6366f1] text-white font-black uppercase hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group"
                        >
                            SEND <MdEmail className="group-hover:scale-110 transition-transform"/>
                        </a>
                    </div>
                </motion.div>

                
                <motion.a 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", bounce: 0.4 }}
                    href="https://www.linkedin.com/in/muhammad-ariz-77949a277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0077b5] text-white p-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all flex items-center justify-between cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <FaLinkedin className="text-4xl text-white border-2 border-black p-1 bg-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
                        <div>
                            <h4 className="font-black text-xl uppercase">LinkedIn</h4>
                            <p className="font-mono text-sm opacity-90 font-bold">Connect Now</p>
                        </div>
                    </div>
                    <FaArrowRight className="text-2xl group-hover:-rotate-45 transition-transform duration-300" />
                </motion.a>

                <motion.a 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
                    href="https://github.com/arizzira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black dark:bg-[#121212] text-white p-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all flex items-center justify-between cursor-pointer"
                >
                    <div className="flex items-center gap-4">
                        <FaGithub className="text-4xl" />
                        <div>
                            <h4 className="font-black text-xl uppercase">GitHub</h4>
                            <p className="font-mono text-sm opacity-90 font-bold">See Code</p>
                        </div>
                    </div>
                    <FaArrowRight className="text-2xl group-hover:-rotate-45 transition-transform duration-300" />
                </motion.a>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex justify-center"
            >
                <a 
                    href="https://goo.gl/maps/something" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full font-bold text-black dark:text-white hover:bg-yellow-300 dark:hover:bg-indigo-600 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                    <FaMapMarkerAlt className="text-red-500 text-xl animate-bounce" />
                    <span className="uppercase tracking-wide font-mono text-sm">Based in Majalengka, ID</span>
                </a>
            </motion.div>

        </div>
    </section>
  );
};

export default Contact;
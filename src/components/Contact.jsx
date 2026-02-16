import React, { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { MdEmail, MdOutlineContentCopy } from "react-icons/md";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const email = "arizgg6@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.disconnect(); };
  }, []);

  return (
    <section 
        id="contact" 
        ref={sectionRef} 
        // UBAH: Background terang di light mode
        className="py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-5xl pointer-events-none">
             {/* UBAH: Opacity disesuaikan untuk light mode */}
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-600/10 rounded-full blur-[128px]"></div>
             <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/40 dark:bg-purple-600/10 rounded-full blur-[128px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            
            <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Let's Work Together</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl mx-auto">
                    Have a project in mind or just want to discuss modern web technologies? 
                    I'm always open to new opportunities and collaborations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Main Email Card (Big CTA) */}
                <div 
                    className={`col-span-1 md:col-span-2 bg-gradient-to-r from-indigo-500/90 to-purple-600/90 dark:from-indigo-900/50 dark:to-purple-900/50 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    {/* Background Noise/Effect */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white text-2xl backdrop-blur-sm border border-white/20">
                            <FaPaperPlane />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Shoot me an email</h3>
                        <p className="text-indigo-100 dark:text-indigo-200 mb-8">I usually reply within 24 hours</p>
                        
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
                            <div className="flex-1 flex items-center justify-between px-6 py-4 bg-white/20 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-xl w-full backdrop-blur-sm">
                                <span className="text-white dark:text-slate-300 font-mono">{email}</span>
                                <button 
                                    onClick={handleCopyEmail}
                                    className="text-white/70 hover:text-white dark:text-slate-400 dark:hover:text-white transition-colors tooltip"
                                    title="Copy Email"
                                >
                                    {copied ? <span className="text-green-300 dark:text-green-400 text-xs font-bold">Copied!</span> : <MdOutlineContentCopy />}
                                </button>
                            </div>
                            <a 
                                href={`mailto:${email}`}
                                className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 dark:text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
                            >
                                <MdEmail /> Send
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. Social & Location Cards */}
                
                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/muhammad-ariz-77949a277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    // UBAH: Kartu putih solid di light mode
                    className={`p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-indigo-50 dark:hover:bg-[#0077b5]/20 hover:border-indigo-200 dark:hover:border-[#0077b5]/50 transition-all group flex items-center justify-between duration-700 delay-300 transform shadow-sm dark:shadow-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="flex items-center gap-4">
                        <FaLinkedin className="text-3xl text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-semibold">LinkedIn</h4>
                            <p className="text-slate-500 text-sm group-hover:text-slate-600 dark:group-hover:text-slate-300">Connect professionally</p>
                        </div>
                    </div>
                    <FaArrowRight className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </a>

                {/* GitHub */}
                <a 
                    href="https://github.com/arizzira"
                    target="_blank"
                    rel="noopener noreferrer"
                    // UBAH: Kartu putih solid di light mode
                    className={`p-6 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/30 transition-all group flex items-center justify-between duration-700 delay-400 transform shadow-sm dark:shadow-none ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="flex items-center gap-4">
                        <FaGithub className="text-3xl text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                        <div>
                            <h4 className="text-slate-900 dark:text-white font-semibold">GitHub</h4>
                            <p className="text-slate-500 text-sm group-hover:text-slate-600 dark:group-hover:text-slate-300">Check my repositories</p>
                        </div>
                    </div>
                    <FaArrowRight className="text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                </a>
            </div>

            {/* Location Badge */}
            <div className={`mt-12 flex justify-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a 
                    href="https://goo.gl/maps/something" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-colors text-sm shadow-sm dark:shadow-none"
                >
                    <FaMapMarkerAlt className="text-red-400" />
                    <span>Based in Majalengka, Indonesia</span>
                </a>
            </div>

        </div>
    </section>
  );
};

export default Contact;
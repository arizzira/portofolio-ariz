import React from "react";
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/Footer";

import Home from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return ( 
    
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative selection:bg-indigo-500 selection:text-white overflow-x-hidden transition-colors duration-300">
      
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
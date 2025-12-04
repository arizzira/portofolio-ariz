import React from "react";
import Navbar from "./assets/components/navbar";
import Footer from "./assets/components/Footer";
import bgImage from "./assets/images/bg/bg.png"; 
import Home from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div 
      style={{ backgroundImage: `url(${bgImage})` }}
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
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
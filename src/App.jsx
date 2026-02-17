import React, { useState, useEffect } from "react";
// Import Navbar & Footer (Pastikan path file Anda benar)
import Navbar from "./assets/components/navbar"; 
import Footer from "./assets/components/Footer";

// Import Section
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ReactLenis } from "lenis/react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ReactLenis root>
      <div className="w-full transition-colors duration-500 bg-white dark:bg-[#050505]">
        {/* Mengirim theme dan setTheme ke Navbar */}
        <Navbar theme={theme} setTheme={setTheme} />
        
        <main>
          {/* Kirim props theme ke Hero agar dia tahu kapan harus berubah warna teks manual */}
          <Hero theme={theme} />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
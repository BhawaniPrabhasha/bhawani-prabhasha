import React from "react";

import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden px-4 sm:px-6 md:px-12">
      
      {/* Fixed left social sidebar */}
      <SocialSidebar />

      {/* Main content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

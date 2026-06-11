import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Profiles from "./components/Profiles";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="app">

      {/* =====================================================
          GLOBAL BACKGROUND EFFECTS
      ===================================================== */}

      <div className="bg-gradient"></div>
      <div className="bg-grid"></div>
      <div className="bg-noise"></div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="main-container">

        {/* HERO */}
        <section
          id="home"
          className="section hero-wrapper"
        >
          <Hero />
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="section"
        >
          <About />
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="section"
        >
          <Skills />
        </section>

        {/* CERTIFICATES */}
        <section
          id="certificates"
          className="section"
        >
          <Certificates />
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section"
        >
          <Projects />
        </section>

        {/* PROFILES */}
        <section
          id="profiles"
          className="section"
        >
          <Profiles />
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section"
        >
          <Contact />
        </section>

      </main>

    </div>
  );
};

export default App;
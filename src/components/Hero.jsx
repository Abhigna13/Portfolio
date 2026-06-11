import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* LEFT SIDE */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-tag">AI • WEB • DESIGN</p>

        <h1 className="hero-intro">
          <span className="line1">Hello, I'm</span>
          <span className="line2">Abhigna Nadupalli</span>
        </h1>

        <h2 className="typing-text">
          <Typewriter
            words={[
              "Frontend Developer",
              "AI Enthusiast",
              "Creative Designer",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={45}
            delaySpeed={1400}
          />
        </h2>

        <p className="hero-description">
          I craft immersive digital experiences with modern frontend technologies,
          blending clean design, smooth interactions, and performance-driven development.
        </p>

        <div className="hero-buttons">
          <motion.a
            href="#projects"
            className="primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1MXvViCEO2zF28ECuwAsRtQjgYEWmCmGN/view?usp=drivesdk"
            className="secondary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Resume
          </motion.a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2 }}
      >

        {/* FLOATING BADGES */}
        <div className="floating-badge badge1">React</div>
        <div className="floating-badge badge2">UI/UX</div>
        <div className="floating-badge badge3">AI</div>

        {/* IMAGE CARD */}
        <div className="image-card">

          <div className="image-glow"></div>

          <img
            src={profilePic}
            alt="Abhigna Nadupalli"
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;
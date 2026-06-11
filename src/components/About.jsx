import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about-split">

      <div className="about-container-split">

        {/* LEFT CONTENT */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <h2 className="about-title">
            About <span>Me</span>
          </h2>

          <p className="about-text">
            I am an AI & Data Science student focused on building modern web applications with clean UI and intelligent functionality.
          </p>

          <p className="about-text">
            I enjoy working with React, Python, and Django to create scalable and user-friendly digital systems.
          </p>

          <p className="about-text">
            My interest lies in Artificial Intelligence, problem solving, and building real-world impactful applications.
          </p>

        </motion.div>

        {/* RIGHT SIDE - INFO PILLS (NOT COPY BOX STYLE) */}
        <motion.div
          className="about-right-stack"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="pill-card">

            <h3>Quick Info</h3>

            <div className="pill-group">
              <span>AI & Data Science Student</span>
              <span>Frontend Developer</span>
              <span>React Enthusiast</span>
            </div>

          </div>

          <div className="pill-card">

            <h3>Interests</h3>

            <div className="pill-group">
              <span>Artificial Intelligence</span>
              <span>UI/UX Design</span>
              <span>Web Development</span>
            </div>

          </div>

          <div className="pill-card">

            <h3>Currently Learning</h3>

            <div className="pill-group">
              <span>Advanced React</span>
              <span>Data Structures</span>
              <span>AI Models</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;
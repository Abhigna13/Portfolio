import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Django",
    "SQL",
    "DBMS",
    "Java",
    "AI & ML",
    "Cloud Computing",
    "Git & GitHub",
  ];

  return (
    <section id="skills" className="skills">

      <motion.div
        className="skills-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        {/* TITLE */}
        <h2 className="skills-title">
          My <span>Skills</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="skills-desc">
          Here are the technologies and tools I use to build modern, scalable, and responsive web applications.
        </p>

        {/* SKILLS GRID */}
        <div className="skills-grid">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  );
};

export default Skills;
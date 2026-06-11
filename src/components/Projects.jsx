import React, { memo } from "react";
import { motion } from "framer-motion";
import aiImg from "../assets/ai.jpg";
import studentImg from "../assets/student.jpg";

const projects = [
  {
    title: "AI Career Recommendation Portal",
    type: "AI Project",
    description:
      "An intelligent system that suggests career paths based on skills, interests, and student profile using AI logic and recommendations.",
    tech: ["AI", "Machine Learning", "Python"],
    image: aiImg,   // ✅ FIXED
    live: "https://abhigna13.github.io/career-portal/",
    github: "https://github.com/Abhigna13/career-portal",
  },
  {
    title: "Student Management System",
    type: "Full Stack Project",
    description:
      "Web-based application to manage student records, attendance, and performance with clean UI and efficient data handling.",
    tech: ["React", "Node.js", "MySQL"],
    image: studentImg,   // ✅ FIXED
    live: "https://abhigna13.github.io/ABHIGNA_12_FEB/",
    github: "https://github.com/Abhigna13/ABHIGNA_12_FEB",
  },
];

// smoother stagger system
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section" aria-label="Projects Section">

      {/* Heading */}
      <motion.div
        className="projects-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          A collection of AI-powered, full-stack, and academic projects showcasing problem-solving
          skills and real-world development experience.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        className="projects-grid"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {projects.map((project) => {
          const { title, type, description, tech, image, live, github } = project;

          return (
            <motion.div
              key={title}
              className="project-card"
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >

              {/* IMAGE */}
              <div className="project-image">
                <img
                  src={image}
                  alt={`${title} preview`}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* TYPE */}
              <div className="project-type">
                {type}
              </div>

              {/* TITLE */}
              <h3>{title}</h3>

              {/* DESCRIPTION */}
              <p>{description}</p>

              {/* TECH STACK */}
              <div className="project-tech">
                {tech?.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {/* LINKS */}
              <div className="project-links">
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`Open live demo of ${title}`}
                >
                  Live Demo 🚀
                </a>

                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  aria-label={`Open GitHub repository of ${title}`}
                >
                  GitHub 💻
                </a>
              </div>

            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default memo(Projects);
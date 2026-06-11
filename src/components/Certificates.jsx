import React from "react";
import { motion } from "framer-motion";

const certificates = [

  {
    title: "Full Stack Development",
    provider: "Infosys Springboard",
    description:
      "Explored frontend and backend technologies focused on scalable and modern web application development.",
    link: "https://drive.google.com/file/d/1La_JUw32RQ6MsXwTBRTTDHqzoQ4Rg1zV/view?usp=drivesdk",
  },

  {
    title: "Cloud Computing Essentials",
    provider: "Cisco Networking Academy",
    description:
      "Learned cloud infrastructure, virtualization, deployment models, and distributed systems basics.",
    link: "https://drive.google.com/file/d/1Mi2xIwXnwhnairCIYhp-SLba1XTC7Uo_/view?usp=drivesdk",
  },

  {
    title: "Python Essentials 2",
    provider: "Cisco Networking Academy",
    description:
      "Enhanced knowledge in advanced Python concepts, modular programming, and application development.",
    link: "https://drive.google.com/file/d/1HlHhXACXPvEBWsBatI91tRBYoDhQjUH3/view?usp=drivesdk",
  },

  {
    title: "Python Essentials 1",
    provider: "Cisco Networking Academy",
    description:
      "Learned Python fundamentals, problem solving, programming logic, and core development concepts.",
    link: "https://drive.google.com/file/d/1DnXT93OPIgR8YT25ONxh7lcOJvFToQWP/view?usp=drivesdk",
  },

  {
    title: "C++ Essentials 1",
    provider: "Cisco Networking Academy",
    description:
      "Built foundational knowledge in C++ programming, logic building, and object-oriented concepts.",
    link: "https://drive.google.com/file/d/1-uP8Q-iM12HG_FhJOCzabxjmW71pSr1h/view?usp=drivesdk",
  },

  {
    title: "C Essentials 1",
    provider: "Cisco Networking Academy",
    description:
      "Built strong foundations in C programming, problem solving, programming logic, and core computer science concepts.",
    link: "https://drive.google.com/file/d/13wVaQbChdsoTjPCq92ajmsnQf_2OFYp6/view?usp=drivesdk",
  },

  {
    title: "EduSkills Cohort 14",
    provider: "EduSkills",
    description:
      "Worked on practical learning experiences and technology-focused skill enhancement.",
    link: "https://drive.google.com/file/d/1YN7IEK-HAodPbRJbXGdqXWw2mpqrIocc/view?usp=drivesdk",
  },

  {
    title: "EduSkills Cohort 13",
    provider: "EduSkills",
    description:
      "Participated in industry-oriented learning and technical skill development programs.",
    link: "https://drive.google.com/file/d/1j0eBBLcN6_O-_UzVau48ewoh9F8I6i8u/view?usp=drivesdk",
  },

];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates-section">

      <motion.div
        className="certificates-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="certificates-title">
          My <span>Certificates</span>
        </h2>

        <p className="certificates-subtitle">
          Certifications and learning experiences that strengthened my
          programming, cloud, and web development skills.
        </p>

      </motion.div>

      <div className="certificates-grid">

        {certificates.map((certificate, index) => (

          <motion.div
            key={index}
            className="certificate-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >

            <div className="certificate-provider">
              {certificate.provider}
            </div>

            <h3>{certificate.title}</h3>

            <p>{certificate.description}</p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate →
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Certificates;
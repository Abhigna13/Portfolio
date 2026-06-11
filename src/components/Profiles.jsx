import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const profiles = [
  {
    name: "GitHub",
    desc: "Building projects, sharing code & exploring open-source development.",
    username: "@Abhigna13",
    link: "https://github.com/Abhigna13",
    icon: <FaGithub />,
  },

  {
    name: "LinkedIn",
    desc: "Connecting professionally and showcasing achievements & growth.",
    username: "@abhignanadupalli",
    link: "https://www.linkedin.com/in/abhignanadupalli/",
    icon: <FaLinkedin />,
  },

  {
    name: "LeetCode",
    desc: "Sharpening problem-solving skills through DSA challenges.",
    username: "@Abhigna13122006",
    link: "https://leetcode.com/u/Abhigna13122006/",
    icon: <SiLeetcode />,
  },

  {
    name: "CodeChef",
    desc: "Practicing competitive programming and algorithmic thinking.",
    username: "@abhigna_nnvss",
    link: "https://www.codechef.com/users/abhigna_nnvss",
    icon: <SiCodechef />,
  },
];

const CodingProfiles = () => {
  return (
    <section className="profiles-section" id="profiles">

      <motion.div
        className="profiles-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2>
          Coding <span>Profiles</span>
        </h2>

        <p>
          Where I practice, build and improve through coding
        </p>
      </motion.div>

      <div className="profiles-grid">
        {profiles.map((p, index) => (
          <motion.a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.04,
              y: -10,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="profile-icon">
              {p.icon}
            </div>

            <div className="profile-content">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>

            <div className="profile-footer">
              <span className="profile-id">
                {p.username}
              </span>

              <span className="visit">
                Explore →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

    </section>
  );
};

export default CodingProfiles;
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      form.reset();

      setTimeout(() => setSuccess(false), 3000);
    }, 1200);
  };

  const contactData = [
    {
      id: "email",
      icon: <FaEnvelope />,
      label: "Email",
      value: "abhignannvss@gmail.com"
    },
    {
      id: "phone",
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 6304411307"
    },
    {
      id: "location",
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Visakhapatnam, India"
    }
  ];

  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow" />

      {/* INTRO */}
      <motion.div
        className="contact-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>
          Let’s <span>Connect</span>
        </h2>

        <p>
          Open for internships, freelance opportunities, and building
          modern AI + web applications.
        </p>
      </motion.div>

      <div className="contact-grid">

        {/* LEFT */}
        <motion.div
          className="info-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {contactData.map((item, i) => (
            <motion.div
              key={item.id}
              className="info-item"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: i * 0.1 }
              }}
              viewport={{ once: true }}
            >
              <div className="icon">
                {item.icon}
              </div>

              <div>
                <span>{item.label}</span>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* SOCIAL BUTTONS */}
          <div className="social-buttons">

            <a
              href="https://github.com/Abhigna13"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/abhignanadupalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>

        </motion.div>

        {/* FORM */}
        <motion.form
          className="form-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Tell me about your project..."
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {success && (
            <div className="success-msg">
              ✓ Message sent successfully
            </div>
          )}

        </motion.form>

      </div>

      {/* FOOTER */}
      <div className="contact-footer">

        <div className="footer-content">

          {/* LEFT */}
          <div className="footer-left">

            <h3 className="footer-title">
              Abhigna Nadupalli
            </h3>

            <p>
              Full Stack Developer & AI Enthusiast
            </p>

            <p>
              Crafting scalable, intelligent, and modern web experiences.
            </p>

          </div>

          {/* CENTER */}
          <div className="footer-center">

            <div>
              <span>Availability</span>

              <p>
                Open for Internships & Freelance Projects
              </p>
            </div>

            <div>
              <span>Focus Area</span>

              <p>
                Full Stack Development | AI-Driven Web Apps
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="footer-right">

            <a
              href="https://github.com/Abhigna13"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abhignanadupalli/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:abhignannvss@gmail.com">
              Email
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © 2026 Abhigna Nadupalli — Built with React & Framer Motion
        </div>

      </div>

    </section>
  );
};

export default Contact;
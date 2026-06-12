import React, { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    "home",
    "about",
    "skills",
    "certificates",
    "projects",
    "profiles",
    "contact"
  ];

  return (
    <nav className="navbar">

      <div className="logo">
        Abhigna<span>.</span>
      </div>

      {/* Hamburger */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {items.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
};

export default Navbar;
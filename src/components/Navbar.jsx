import React from "react";

const Navbar = () => {

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
    <nav className="navbar" aria-label="Main navigation">

      {/* LOGO */}
      <div className="logo">
        Abhigna<span>.</span>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">

        {items.map((item) => (

          <li key={item}>

            <a href={`#${item}`}>

              {item.charAt(0).toUpperCase() + item.slice(1)}

            </a>

          </li>

        ))}

      </ul>

    </nav>
  );
};

export default Navbar;
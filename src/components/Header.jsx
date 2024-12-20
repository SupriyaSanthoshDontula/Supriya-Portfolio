import React from "react";
import { Link as ScrollLink } from "react-scroll";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className={isDarkMode ? "dark-mode" : ""}>
      <a href="/" className="logo">D.Supriya</a>

      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        <i className={isDarkMode ? "fa fa-sun" : "fa fa-moon"}></i>
      </button>

      <nav className="navigation">
        <ScrollLink to="Profile" smooth={true} duration={500}>
          Profile
        </ScrollLink>
        <ScrollLink to="Education" smooth={true} duration={500}>
          Education
        </ScrollLink>
        <ScrollLink to="Skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
        <ScrollLink to="Projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
        <ScrollLink to="Contact" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </nav>

      

       
    </header>
  );
}

export default Header;

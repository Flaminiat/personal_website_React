import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="menu large" id="menu">
          <li className="nav-item">
            <a href="#intro">INTRO</a>
          </li>
          <li className="nav-item">
            <a href="#about">ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#services">SERVICES</a>
          </li>
          <li className="nav-item">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

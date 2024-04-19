import React from "react";
import './navHeader.css';

const Header = () => {
  return (
      <div className="navContainer">
        <p className="navItem">Me</p>
        <p className="navItem">Academics</p>
        <p className="navItem">Experiences</p>
        <p className="navItem">Learning</p>
        <p className="navItem">Blog</p>
      </div>
  );
}

export default Header;
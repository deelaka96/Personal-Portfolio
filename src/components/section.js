import React from "react";
import './section.css';


const Section = ({ title, children }) => {
  return (
    <div className="sectionContainer">
      <code>{title}</code >
      {children}
    </div>
  );
};

export default Section;
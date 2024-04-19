import React from "react";
import './section.css';


const Section = ({ title, children }) => {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Section;
import React from "react";
import './careerSection.css';

const Career = ({ company, position, duration, description }) => {
    return (
        <div>
            <p>{company}</p>
            <p>{position}</p>
            <p>{duration}</p>
            <p>{description}</p>
        </div>
    );
}

export default Career;
import React from "react";
import './careerSection.css';

const Career = ({ company, position, duration, description }) => {
    return (
        <div className="careerContainer">
            <p className="careerCompany">{company}</p>
            <p>{position}</p>
            <p>{duration}</p>
            <p className="careerDescription">{description.map((obj) => { return <p>{obj.children[0].text}</p> }
            )}</p>
        </div>
    );
}

export default Career;
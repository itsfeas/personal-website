import React from 'react';
import "./ExperienceEntry.css";

function ExperienceEntry({ id }) {
  return (
    <div className="exp-entry" id={"exp-entry" + id}>
      <h4 className="job-title">Incoming Automation Developer</h4>
      <p className="company">Nokia</p>
      <ul className="description-list">
        <li className="description">About Me</li>
        <li className="description">Experience</li>
        <li className="description">Projects</li>
        <li className="description">Skills</li>
        <li className="description">Contact Me</li>
      </ul>
    </div>
  );
}

export default ExperienceEntry;
import React from 'react';
import "./ProjectEntry.css";
import "../Block.css"

function ProjectEntry({ name, image, descr }) {
    return (
      <div className="prj-entry">
        <div className="prj-content gradient-border-padded">
          <div className="prj-content-container">
            { image }
            <div className="prj-text">
                <h4 className="prj-title">{ name }</h4>
                { descr }
            </div>
          </div>
      </div>
    </div>
  );
}

export default ProjectEntry;
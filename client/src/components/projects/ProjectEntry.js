import React from 'react';
import "./ProjectEntry.css";
import "../Block.css"

function ProjectEntry({ id, name, image, descr }) {
    return (
      <div className="prj-entry" id={"prj-entry" + id}>
        <div className="prj-content faded">
            <div className="prj-text">
                <h4 className="prj-title">{ name }</h4>
                { descr }
            </div>
            {image}
      </div>
    </div>
  );
}

export default ProjectEntry;
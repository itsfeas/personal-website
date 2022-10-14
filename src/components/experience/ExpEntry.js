import React from 'react';
import "./ExpBlock.css";
import "../Block.css"

function ExpEntry({ company, position, date, descr, image }) {
    return (
      <div className="experience-entry">
        <div className="experience-content gradient-border-padded">
          <div className="experience-text text-main">
            <h2 className="experience-title text-main colored-text">{ company }</h2>
            <h3 className="text-main colored-text"><i>{ position }</i></h3>
            <h4 className="text-main colored-text">{ date }</h4>
            { descr }
          </div>
          {image}
      </div>
    </div>
  );
}

export default ExpEntry;
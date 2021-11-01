import React from 'react';
import blockStyle from './Block';
import ExperienceEntry from './ExperienceEntry';

function ExperienceBlock({ height, id }) {
  return (
    <div style={blockStyle(height)} className={"block"}>
      <div className="block-content" id={"experience-block" + id}>
        <h1>Experience</h1>
        <p>Test</p>
        <ExperienceEntry
          id = {1}
          />
      </div>
    </div>
  );
}

export default ExperienceBlock;
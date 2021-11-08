import React from 'react';
import blockStyle from '../Block';
import ProjectEntry from './ProjectEntry';
import '../Block.css'

import { FanGraphic, FanList } from './fan/Fan';
import { ABGraphic, ABList } from './abloop/abloop';

function ProjectBlock({ height, id }) {
  return (
    <div style={blockStyle(height)} className={"block"}>
        <div className="block-content" id={"project-block" + id}>
            <h1>Projects</h1>
            <p>Test</p>
            <ProjectEntry
                id = {1}
                name = { "human tracking fan" }
                image = { <FanGraphic /> }
                descr = { <FanList /> }
            />
            <ProjectEntry
                id={2}
                name={"albertaloop"}
                image={<ABGraphic />}
                descr={<ABList />}
            />
        </div>
    </div>
  );
}

export default ProjectBlock;
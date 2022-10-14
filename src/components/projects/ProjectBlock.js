import React from 'react';
import blockStyle from '../Block';
import ProjectEntry from './ProjectEntry';
import '../Block.css'

import { FanGraphic, FanDesc } from './human-tracking-fan/Fan';
import { ABGraphic, ABDesc } from './abloop/Abloop';
import { CreditTrackGraphic, CreditTrackDesc } from './credit-tracking/CreditTracking';
import { MdtkrGraphic, MdtkrDesc } from './mdtkr/MDTKR';
import { AirBlipGraphic, AirBlipDesc } from './airblip/AirBlip';
import { EpilepSafeGraphic, EpilepSafeDesc } from './epilepsafe/EpilepSafe';

function ProjectBlock({ height, id }) {
  return (
    <div style={blockStyle(height)} className={"block"}>
      <div className="block-content" id={"project-block" + id}>
        <h1 className='heading'>Projects</h1>
        <div className="project-grid" id="prj-grid">
          <ProjectEntry
            name={"Inter-Club Credit Tracking Website"}
            image={<CreditTrackGraphic />}
            descr={<CreditTrackDesc />}
          />
          <ProjectEntry
            name={"Automated Mood Tracking Study"}
            image={<MdtkrGraphic />}
            descr={<MdtkrDesc />}
          />
          <ProjectEntry
            name={"AirBlip"}
            image={<AirBlipGraphic />}
            descr={<AirBlipDesc />}
          />
          <ProjectEntry
            name={"Student-Developed Train System"}
            image={<ABGraphic />}
            descr={<ABDesc />}
          />
          <ProjectEntry
            name={"EpilepSafe"}
            image={<EpilepSafeGraphic />}
            descr={<EpilepSafeDesc />}
          />
          <ProjectEntry
            name={"Autonomous Human Tracking Fan"}
            image={<FanGraphic />}
            descr={<FanDesc />}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
import React, { useEffect } from 'react';
import blockStyle from '../Block';
import ExpEntry from './ExpEntry';
import "./ExpBlock.css";
import '../Block.css'

import { NokiaSPDesc, NokiaNIDesc, NokiaGraphic } from './Nokia/Nokia';
import { NeurocageDesc, NeurocageGraphic } from './Neurocage/Neurocage';

function ExpBlock() {
  return (
    <div className="block" id="event-block">
      <div className="event-block block-content">
        <h1 className="heading event-heading">Work Experience</h1>
        <div className="experience-grid" id="experience-grid">
          <ExpEntry
            company={"Nokia"}
            position={"Software Developer Co-op"}
            date={"Apr-Dec 2022"}
            image={<NokiaGraphic />}
            descr={<NokiaNIDesc />}
          />
          <ExpEntry
            company={"Nokia"}
            position={"Software Developer Co-op"}
            date={"Jan-Apr 2022"}
            image={<NokiaGraphic />}
            descr={<NokiaSPDesc />}
          />
          <ExpEntry
            company={"Neurocage"}
            position={"Software Developer Co-op"}
            date={"May-August 2021"}
            image={<NeurocageGraphic />}
            descr={<NeurocageDesc />}
          />
        </div>
      </div>
    </div>
  );
}

export default ExpBlock;
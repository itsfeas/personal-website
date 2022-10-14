import React, { useEffect } from 'react';
import blockStyle from '../Block';
import ProjectEntry from './ProjectEntry';
import '../Block.css'

import { FanGraphic, FanDesc } from './human-tracking-fan/Fan';
import { ABGraphic, ABDesc } from './abloop/Abloop';
import { CreditTrackGraphic, CreditTrackDesc } from './credit-tracking/CreditTracking';
import { MdtkrGraphic, MdtkrDesc } from './mdtkr/MDTKR';
import { AirBlipGraphic, AirBlipDesc } from './airblip/AirBlip';
import { EpilepSafeGraphic, EpilepSafeDesc } from './epilepsafe/EpilepSafe';


const fade = (percentage) => ({
  transform: 'translateY(' + 50*percentage +'px)',
  opacity: percentage,
  // 'transition-property': 'transform, opacity',
  // 'transition-duration': '1s',
  // 'transition-timing-function': 'linear'
}
);

function ProjectBlock({ height, id }) {
  useEffect(
    () => {
      const toBeObserved = document.querySelectorAll(".faded");
      // const toBeObserved = document.getElementsByClassName('prj-content');

      // root is the browser viewport / screen
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
          if (entry['isIntersecting'] === true) {
            entry.target.classList.add("in-view");
            console.log('Target is visible in the screen');
          }
          else {
            if (entry.target.classList.contains("in-view")) {
              // entry.target.classList.remove("in-view");
              observer.unobserve(entry.target);
            };
            console.log('Target is not visible in the screen');
          }
        }, { threshold: [0, 1] });

        });

      toBeObserved.forEach(observed => {
        observer.observe(observed);
        // observed.style.opacity = 0.5;
      });
    }, []
  );
  return (
    <div style={blockStyle(height)} className={"block"}>
      <div className="block-content" id={"project-block" + id}>
        <h1 className='heading faded'>Projects</h1>
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
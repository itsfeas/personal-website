import React, { useEffect } from 'react';
import blockStyle from '../Block';
import ProjectEntry from './ProjectEntry';
import '../Block.css'

import { FanGraphic, FanDesc } from './human-tracking-fan/Fan';
import { ABGraphic, ABDesc } from './abloop/Abloop';
import { CreditTrackGraphic, CreditTrackDesc } from './credit-tracking/CreditTracking';
import { BotGraphic, BotDesc } from './discord-music-bot/MusicBot';
import { EyeRisGraphic, EyeRisDesc } from './eyeris/EyeRis';
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
            id={1}
            name={"Inter-Club Credit Tracking Website"}
            image={<CreditTrackGraphic />}
            descr={<CreditTrackDesc />}
          />
          <ProjectEntry
            id = {2}
            name = { "Autonomous Human Tracking Fan" }
            image = { <FanGraphic /> }
            descr = { <FanDesc /> }
          />
          <ProjectEntry
            id={3}
            name={"Albertaloop"}
            image={<ABGraphic />}
            descr={<ABDesc />}
          />
          <ProjectEntry
            id={4}
            name={"Discord Music Bot"}
            image={<BotGraphic />}
            descr={<BotDesc />}
          />
          <ProjectEntry
            id={5}
            name={"EpilepSafe"}
            image={<EpilepSafeGraphic />}
            descr={<EpilepSafeDesc />}
          />
          <ProjectEntry
            id={6}
            name={"EyeRis"}
            image={<EyeRisGraphic />}
            descr={<EyeRisDesc />}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
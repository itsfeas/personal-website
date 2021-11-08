import React from 'react';
import githubLogo from "../socials/github.svg";
import linkedinLogo from "../socials/linkedin.svg";
import emailIcon from "../socials/mail.svg";

import blockStyle from './Block';
import './Block.css';
import './SocialsBlock.css'

function SocialsBlock({ height, id }) {
  return (
    <div style={blockStyle(height)} className={"block"}>
      <div className="footer">
          <div className="footer-text">
              <p>Built with React</p>
          </div>

          <p className="divider">|</p>
          <p><a href="https://github.com/itsfeas/personal-website">Website Repo</a></p>
          <p className="divider">|</p>

          <div className="socials-content" id={"socials-content-" + id}>
              <a href="https://github.com/itsfeas">
                <img src={githubLogo} className="socials-icon highlighted" alt="Github Logo" />
              </a>
              <a href="https://www.linkedin.com/in/amf-fiaz/">
                <img src={linkedinLogo} className="socials-icon highlighted" alt="LinkedIn Logo" />
              </a>
              <a href="mailto:mfiaz@ualberta.ca">
                <img src={emailIcon} className="socials-icon highlighted" alt="Email Icon" />
              </a>
          </div>
        </div>
    </div>
  );
}

export default SocialsBlock;
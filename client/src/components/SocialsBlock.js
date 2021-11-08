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
        <div className="socials-content" id={"socials-content-" + id}>
            <img src={githubLogo} className="socials-icon highlighted" alt="Github Logo" />
            <img src={linkedinLogo} className="socials-icon highlighted" alt="LinkedIn Logo" />
            <img src={emailIcon} className="socials-icon highlighted" alt="Email Icon" />
        </div>
    </div>
  );
}

export default SocialsBlock;
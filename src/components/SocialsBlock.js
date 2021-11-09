import React from 'react';
import githubLogo from "../socials/github.svg";
import linkedinLogo from "../socials/linkedin.svg";
import emailIcon from "../socials/mail.svg";

import blockStyle from './Block';
import './Block.css';
import './SocialsBlock.css'

function SocialsBlock({ height, id }) {
  return (
    <div className="footer-block">
      <div className="footer">
          <p className="footer-text">Built with React</p>
          <p className="divider">|</p>
          <p className="footer-text highlighted-text footer-link"><a href="https://github.com/itsfeas/personal-website">Website Repo</a></p>
          {/* <p className="footer-text">Property Muhammad Fiaz</p> */}
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
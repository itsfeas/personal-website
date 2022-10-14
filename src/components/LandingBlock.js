import React, { useEffect } from 'react';
// import landingStyle from './Block';
import './LandingBlock.css'
import fanImg from '../img/profile4.jpg'
import Resume from '../documents/Resume.pdf';

const landingStyle = (height) => ({
    display: 'flex',
    // padding: '10vh',
    // 'border-bottom': '1px solid gray',
    'align-items': 'flex-start',
    'min-height': height + 'vh',
    'max-height': '100vh',
    'overflow': 'hidden'
}
)

function LandingBlock({ height, id }) {
    return (
        <div style={ landingStyle(height)} className={"block"}>
            <div className="landing-content" id={"project-block" + id}>
                <div className="landing-text" id="landing-text-1">
                    <h1 className='main-heading faded gradient-text'>Hi, I'm Fiaz!</h1>
                    <h2 className='sub-heading faded colored-text'>3rd Year Software Engineering Student @UAlberta</h2>
                    {/* <h3 className='sub-heading faded'>Interested in Front and Back-End Development</h3> */}
                        <p className='main-desc faded'>
                        Check out my resume <a className='desc-link' target = "_blank" href={Resume}>here</a>
                        </p>
                </div>
                {/* <img src={fanImg} className="landing-img" alt="Image of Fan" /> */}
                <div className='landing-img-container faded'>
                    <img src={fanImg} className="landing-img" alt="Profile Picture" />
                </div>
            </div>
        </div>
    );
}

export default LandingBlock;
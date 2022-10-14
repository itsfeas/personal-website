import graphic from './Nokia.png';
import "../ExpBlock.css";
import GradientImg from '../../../commons/gradient/GradientImg';

function NokiaGraphic() {
    return (
        <div className="experience-img-container">
            <img src={graphic} className="experience-graphic" alt="HackEd Logo" />
        </div>
    );
}

function NokiaNIDesc() {
    return (
        <div className="experience-desc-container">
            <p>Developing front & back-end features for Verizon Wireless Service Portal, the primary internal network asset management web app used for managing & configuring nearly all 100 000+ company network assets, worth over $10B</p>
        </div>
    );
}

function NokiaAutomationDesc() {
    return (
        <div className="experience-desc-container">
            <p>Wrote testbed configuration scripts for new router platform currently in use by over 100 test engineers using TCL</p>
            <p>Designed and implemented unit tests of new software features in a Linux-based regression environment</p>
        </div>
    );
}

export {
    NokiaGraphic,
    NokiaNIDesc,
    NokiaAutomationDesc
};
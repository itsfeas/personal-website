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
            <p>Significantly impacted support engineer team efficiency by constructing data acquisition API for network element configuration failures using Java, Spring Boot, and JDBC – automating manual task of 1hr to less than 1s</p>
            <p>Greatly benefited user experience by designing and implementing Network Report API using Java, Spring Boot: converting legacy asynchronous report request system to ad-hoc format while retaining full cross-compatibility</p>
            <p>Reduced report viewing times by over 15x compared to legacy system by rebuilding and modularizing 5 legacy reporting pages using Polymer.js, jQuery, and styling with Bootstrap</p>
            <p>Impacted merge request review time by implementing multi-stage test & build Gitlab pipeline across 20+ modules</p>
        </div>
    );
}

function NokiaAutomationDesc() {
    return (
        <div className="experience-desc-container">
            <p>Wrote testbed configuration scripts for new router platform currently in use by over 100 test engineers using TCL</p>
            <p>Reduced manual traffic test workflow time for router chips by over 10x</p>
            <p>Debugged and identified root cause of complex bugs, heightening stability of fundamental software features</p>
            <p>Designed and implemented unit tests of new software features in a Linux-based regression environment</p>
        </div>
    );
}

export {
    NokiaGraphic,
    NokiaNIDesc,
    NokiaAutomationDesc
};
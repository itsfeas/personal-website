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
            <p className='text-main'>HackED is one of Alberta’s largest student-run hackathons with over 700 participants, and a history stretching back over 10 years. For 24 hours, participants work together in teams of 1 to 5 people to build a project. Teams can work on hardware or software projects.</p>
            <p className='text-main'>There is no limit on creativity. The hackathon acts as a sort of incubator to mini projects as it provides a focused time to work on ideas with mentors and workshops.</p>
        </div>
    );
}

function NokiaSPDesc() {
    return (
        <div className="experience-desc-container">
            <p className='text-main'>HackED Beta is a recent addition to our roster, happening in advance of HackED to serve as an introduction for prospective participants. The format is similar with its intent being to give a window into the hackathon process, and provide a space for interested individuals to learn more about programming and design.</p>
        </div>
    );
}

export {
    NokiaGraphic,
    NokiaNIDesc,
    NokiaSPDesc
};
import graphic from './mice.png';
import "../ExpBlock.css";
import HollowButton from '../../../commons/buttons/HollowButton';
import GradientImg from '../../../commons/gradient/GradientImg';

function NeurocageGraphic() {
    return (
        <div className="experience-img-container">
            <img src={graphic} className="experience-graphic" alt="HackEd Logo" />
        </div>
    );
}

function NeurocageDesc() {
    return (
        <div className="experience-desc-container">
            <p className='text-main'>HackED is one of Alberta’s largest student-run hackathons with over 700 participants, and a history stretching back over 10 years. For 24 hours, participants work together in teams of 1 to 5 people to build a project. Teams can work on hardware or software projects.</p>
            <p className='text-main'>There is no limit on creativity. The hackathon acts as a sort of incubator to mini projects as it provides a focused time to work on ideas with mentors and workshops.</p>
        </div>
    );
}

export {
    NeurocageGraphic,
    NeurocageDesc
};
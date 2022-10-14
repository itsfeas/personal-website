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
            <p>Created artificial intelligence systems for animal husbandry in rodent homecages</p>
            <p>Built, deployed, and optimized computer vision systems for rodent cage state estimation (food levels, water levels, etc)</p>
        </div>
    );
}

export {
    NeurocageGraphic,
    NeurocageDesc
};
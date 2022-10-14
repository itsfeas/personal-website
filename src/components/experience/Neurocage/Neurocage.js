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
            <p>Built, deployed, and optimized computer vision systems for rodent cage state estimation (food levels, water levels, etc)</p>
            <p>Re-constructed state estimation system, reducing total footprint of ML models from 13GB to 3GB</p>
            <p>Developed system using Scikit-Learn capable of estimating homecage fecal matter counts with accuracy of over 90%</p>
            <p>Implemented texture analysis and image processing pipelines using OpenCV, Numpy and Scikit-Image</p>
        </div>
    );
}

export {
    NeurocageGraphic,
    NeurocageDesc
};
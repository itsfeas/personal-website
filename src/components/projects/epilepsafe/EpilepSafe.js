import HollowButton from '../../../commons/buttons/HollowButton';
import epilepsafeLogo from './epilepSafe.png';

function EpilepSafeGraphic() {
    return (
        <div className="img-container">
            <img src={epilepsafeLogo} className="epilepsafe-img prj-img" alt="Image of Logo" />
        </div>
    );
}


function EpilepSafeDesc() {
    return (
        <>
            <p>A seizure prevention tool for Epilepsy patients. Scans YouTube videos for time-frames capable of triggering seizures. Uses OpenCV, NumPy, and PyTube.</p>
            <a href='https://github.com/itsfeas/EpilepSafe' className="prj-link-btn">
                <HollowButton text={"Link to Repo"}/>
            </a>
        </>
    );
}

export {
    EpilepSafeGraphic,
    EpilepSafeDesc
};
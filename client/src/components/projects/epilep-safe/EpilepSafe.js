import epilepsafeLogo from './epilepSafe.png';

function EpilepSafeGraphic() {
    return (
        <div className="img-container">
            <img src={epilepsafeLogo} className="fan-img" alt="Image of Logo" />
        </div>
    );
}


function EpilepSafeDesc() {
    return (
        <div className="desc-container">
            <p>A seizure prevention tool for Epilepsy patients. Scans YouTube videos for time-frames capable of triggering seizures. Uses OpenCV, NumPy, and PyTube.</p>
            <a href='https://github.com/itsfeas/EpilepSafe' className="highlighted-text prj-link">Link to Repo</a>
        </div>
    );
}

export {
    EpilepSafeGraphic,
    EpilepSafeDesc
};
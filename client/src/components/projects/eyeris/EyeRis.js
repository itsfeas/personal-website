import eyeRisLogo from './eyeRis.png';

function EyeRisGraphic() {
    return (
        <div className="img-container">
            <img src={eyeRisLogo} className="fan-img" alt="Image of EyeRis" />
        </div>
    );
}


function EyeRisDesc() {
    return (
        <div className="desc-container">
            <p>Developed tool that allows users to control their music and scroll through documents with hand swipes. Uses Numpy and OpenCV for camera feed analysis.</p>
            <a href='https://github.com/itsfeas/EyeRis' className="highlighted-text prj-link">Link to Repo</a>
        </div>
    );
}

export {
    EyeRisGraphic,
    EyeRisDesc
};
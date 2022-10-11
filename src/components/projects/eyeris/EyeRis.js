import HollowButton from '../../../commons/buttons/HollowButton';
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
        <>
            <p>Developed tool that allows users to control their music and scroll through documents with hand swipes. Uses NumPy and OpenCV for camera feed analysis.</p>
            <a href='https://github.com/itsfeas/EyeRis' className="prj-link-btn">
                <HollowButton text={"Link to Repo"} />
            </a>
        </>
    );
}

export {
    EyeRisGraphic,
    EyeRisDesc
};
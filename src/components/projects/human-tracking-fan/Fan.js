import HollowButton from '../../../commons/buttons/HollowButton';
import fanImg from './fan.svg';

function FanGraphic() {
    return (
        <div className="img-container">
            <img src={fanImg} className="fan-img" alt="Image of Fan" />
        </div>
    );
}


function FanDesc() {
    return (
        <>
            <p className="prj-desc">Developed fan capable of tracking users using camera feed, as well as a Flask app for manual control! Built with Tensorflow, C++, JS, and Flask.</p>
            <a href='https://github.com/itsfeas/human-tracking-fan' className="prj-link-btn">
                <HollowButton text={"Link to Repo"} />
            </a>
        </>
    );
}

export {
    FanGraphic,
    FanDesc
};
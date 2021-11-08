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
        <div className="desc-container">
            <p className="prj-desc">Developed fan capable of tracking users using camera feed, as well as a web app for manual control! Built with Tensorflow, C++, JS, and Flask.</p>
            <p className="highlighted-text prj-link">Link to Repo</p>
        </div>
    );
}

export {
    FanGraphic,
    FanDesc
};
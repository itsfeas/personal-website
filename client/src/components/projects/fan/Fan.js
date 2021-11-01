import fanImg from './fan.svg';

function FanGraphic() {
    return (
        <div className="img-container">
            <img src={fanImg} className="fan-img" alt="Image of Fan" />
        </div>
    );
}


function FanList() {
    return (
        <div className="container">
            <ul className="desc-list">
                <li className="desc">● Developed fan capable of tracking users using camera feed, as well as associated web app</li>
                <li className="desc">● Built web app for manual control using Flask, HTML, CSS, JavaScript, and the Fetch API</li>
                <li className="desc">● Integrated Human Tracking Capabilities using neural networks powered by Tensorflow</li>
                <li className="desc">● Designed client-server system between web app and microcontroller</li>
            </ul>
        </div>
    );
}

export {
    FanGraphic,
    FanList
};
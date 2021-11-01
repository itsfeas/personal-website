import abImg from './abloop_logo.svg';

function ABGraphic() {
    return (
        <div className="img-container">
            <img src={abImg} className="ab-logo" alt="Logo of Albertaloop" />
        </div>
    );
}


function ABList() {
    return (
        <div className="container">
            <ul className="desc-list">
                <li className="desc">● Developed AB capable of tracking users using camera feed, as well as associated web app</li>
                <li className="desc">● Built web app for manual control using Flask, HTML, CSS, JavaScript, and the Fetch API</li>
                <li className="desc">● Integrated Human Tracking Capabilities using neural networks powered by Tensorflow</li>
                <li className="desc">● Designed client-server system between web app and microcontroller</li>
            </ul>
        </div>
    );
}

export {
    ABGraphic,
    ABList
};
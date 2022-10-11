import HollowButton from '../../../commons/buttons/HollowButton';
import abImg from './abloop_logo.svg';

function ABGraphic() {
    return (
        <div className="img-container">
            <img src={abImg} className="ab-logo" alt="Logo of Albertaloop" />
        </div>
    );
}


function ABDesc() {
    return (
        <div className="desc-container">
            <p>Leading group of 6 members in developing software for train control systems and communication networks. Working with C++, CAN Protocols, and Python.</p>
            <a href='http://albertaloop.ca/' className="prj-link-btn">
                <HollowButton text={"Website"} />
            </a>
        </div>
    );
}

export {
    ABGraphic,
    ABDesc
};
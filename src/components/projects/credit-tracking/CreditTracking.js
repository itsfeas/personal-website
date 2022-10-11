import HollowButton from '../../../commons/buttons/HollowButton';
import creditImg from './creditTracking.svg';

function CreditTrackGraphic() {
    return (
        <div className="img-container">
            <img src={creditImg} className="dollar-img" alt="Image of dollar sign" />
        </div>
    );
}


function CreditTrackDesc() {
    return (
        <div className="desc-container">
            <p>Worked with team of 4 to develop website for tracking customer credit for UAlberta Clubs. Built with React, NodeJS, and PostgreSQL.</p>
            <a href='https://github.com/UAlbertaCompEClub/credit-tracking' className="prj-link-btn">
                <HollowButton text={"Link to Repo"} />
            </a>
        </div>
    );
}

export {
    CreditTrackGraphic,
    CreditTrackDesc
};
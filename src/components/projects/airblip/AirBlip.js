import HollowButton from '../../../commons/buttons/HollowButton';
import logo from './AirBlip.png';

function AirBlipGraphic() {
    return (
        <div className="img-container">
            <img src={logo} className="airblip-img prj-img" alt="Image of AirBlip" />
        </div>
    );
}


function AirBlipDesc() {
    return (
        <>
            <p>Developed tool for digital data transfer between Android phones and PCs using sound.</p>
            <a href='https://github.com/itsfeas/airblip' className="prj-link-btn">
                <HollowButton text={"Link to Repo"} />
            </a>
        </>
    );
}

export {
    AirBlipGraphic,
    AirBlipDesc
};
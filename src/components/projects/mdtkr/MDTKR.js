import HollowButton from '../../../commons/buttons/HollowButton';
import logo from './mdtkr.png';

function MdtkrGraphic() {
    return (
        <div className="img-container">
            <img src={logo} className="mdtkr-img prj-img" alt="Discord Logo" />
        </div>
    );
}


function MdtkrDesc() {
    return (
        <>
            <p>Conducting study with team of ~20 volunteers to determine effectiveness of mood inference using phone usage data, using Kotlin-based Android app.</p>
            <a href='https://github.com/MoodTrkr/android-volunteer' className="prj-link-btn">
                <HollowButton text={"Link to Repo"} />
            </a>
        </>
    );
}

export {
    MdtkrGraphic,
    MdtkrDesc
};
import HollowButton from '../../../commons/buttons/HollowButton';
import botImg from './musicBot.svg';

function BotGraphic() {
    return (
        <div className="img-container">
            <img src={botImg} className="bot-img" alt="Discord Logo" />
        </div>
    );
}


function BotDesc() {
    return (
        <div className="desc-container">
            <p>A music bot for playing songs in Discord voice calls through youtube videos! Built on the Discord API, FFMPEG, and PyTube.</p>
            <a href='https://github.com/itsfeas/discord-music-bot' className="prj-link-btn">
                <HollowButton text={"Link to Repo"} />
            </a>
        </div>
    );
}

export {
    BotGraphic,
    BotDesc
};
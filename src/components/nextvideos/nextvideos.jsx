
import "./_nextvideos.scss";
import { useNavigate } from "react-router-dom";
function NextVideo(props) {
    let removedCurrent = props.nextVideos.map((item) => (item)).filter((item) => item.id !== props.currentVideoID);
            console.log(removedCurrent)
    const navigate = useNavigate();
    return (
        <div className="nextVideo">
            <p className="nextVideo__header">Next Videos</p>
            {removedCurrent.map((item) => (
        <div
            key={item.id}
            className="nextVideo__video-container"
            onClick={() => navigate(`/${item.id}`)}
        >
            <div className="nextVideo__image-container">
                <img src={item.image} alt=" " className="nextVideo__image" />
            </div>
            <div className="nextVideo__description-container">
                <p className="nextVideo__title">{item.title}</p>
                <p className="nextVideo__channel">{item.channel}</p>
            </div>
        </div>
        ))}
    </div>
    );
}

export default NextVideo;

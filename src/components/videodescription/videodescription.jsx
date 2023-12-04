import viewsImage from '../../assets/images/icons/views.svg';
import likesImage from '../../assets/images/icons/likes.svg';


function VideoDescription(props) {
    let key = props.currentVideoID;
    const result = props.VideoDetails.find(({id}) => id === key)
    const {title, channel, description, views, likes, timestamp} = result;
let date = new Date(timestamp).toLocaleDateString();
    return (
        <div className="video__details">
            <div className="video__title-section">
                <h1 className="video__title">{title}</h1>
            </div>
            <div className="video__channel-section">
                <p className="video__channel-name">By {channel}</p>
                <p className="video__upload-date">{date}</p>
            </div>
            <div className="video__likes-section">
                <p className="video__views"><img src={viewsImage} alt="" className='video__views-image'/>{views}</p>
                <p className="video__likes"><img src={likesImage} alt="" className='video__likes-image'/>{likes}</p>
            </div>
            <div className="video__description-section">
                <p className="video__description">{description}</p>
            </div>
        </div>
    )
}

export default VideoDescription;
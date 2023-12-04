import './_nextvideos.scss'

function NextVideo(props) {
    console.log(props.VideoJson)
    let key = props.currentVideoID
    let videos = props.VideoJson
    const removedCurrent = videos.map((item) => (item)).filter((item) => item.id !== key);
    console.log(removedCurrent)
    return (
        <div className="nextVideo">
            <p className="nextVideo__header">Next Videos</p>
            {removedCurrent.map((item) => (
                <div key={item.id} className="nextVideo__video-container" onClick={() => props.clickHandler(item.id)}>
                    <div className='nextVideo__image-container'>
                        <img src={item.image} alt=" " className="nextVideo__image" />
                    </div>
                    <div className="nextVideo__description-container">
                        <p className="nextVideo__title">{item.title}</p>
                        <p className="nextVideo__channel">{item.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NextVideo;
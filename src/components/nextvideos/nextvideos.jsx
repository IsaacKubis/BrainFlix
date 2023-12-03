function NextVideo(props) {
    console.log(props.VideoJson)
    let key = props.currentVideoID
    let videos = props.VideoJson
    const removedCurrent = videos.map((item) => (item)).filter((item) => item.id !== key);
    console.log(removedCurrent)
    return (
        <div>
            {removedCurrent.map((item) => (
                <div key={item.id} onClick={() => props.clickHandler(item.id)}>
                    <img src={item.image} alt=" " height={100} width={100}/>
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NextVideo;
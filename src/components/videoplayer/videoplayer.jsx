import VideoDescription from "./videodescription";
import './_videoplayer.scss'

function VideoPlayer(props) {
        let key = props.currentVideoID;
        const result = props.VideoDetails.find(({id}) => id === key)
        return (
            <section className="video">
                    <video className="video__player" key={result.id} poster={result.image} controls >
                        
                    </video>
                    <VideoDescription result={result}/>
            </section>
        )
}


export default VideoPlayer;
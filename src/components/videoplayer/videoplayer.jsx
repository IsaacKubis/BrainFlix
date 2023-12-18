import "./_videoplayer.scss";

function VideoPlayer(props) {
  const result = props.VideoDetails;
  return (
    <section className="video">
      <video
        className="video__player"
        key={result.id}
        poster={result.image}
        controls
      ></video>
    </section>
  );
}

export default VideoPlayer;

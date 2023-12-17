import "./_comments.scss";
import addComment from "../../assets/images/icons/add_comment.svg";
function Comments(props) {
  let days = "";
  let unitOfTime = "";
  function test(timestamp) {
    let date = new Date();
    let oldDate = new Date(timestamp);
    let compareDate = date.getTime() - oldDate.getTime();
    // let compareDateDays = compareDate / (1000 * 3600 * 24);
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;
    if (compareDate > year) {
      let years = compareDate / year;
      days = Math.floor(years);
      unitOfTime = " years ago.";
    } else if (compareDate > day * 30.437 && compareDate < year) {
      let hours = compareDate / hour;
      let months = hours / 24 / 30.437;
      days = Math.floor(months);
      unitOfTime = " months ago.";
    } else if (compareDate > day && compareDate > hour) {
      let hours = compareDate / hour;
      let dayNum = hours / 24;
      days = Math.floor(dayNum);
      unitOfTime = " Days ago.";
    } else if (compareDate > hour && compareDate < day) {
      let hours = compareDate / hour;
      days = Math.floor(hours);
      unitOfTime = " Hours ago.";
    } else if (compareDate < hour && compareDate > minute) {
      let minutes = compareDate / minute;
      days = Math.floor(minutes);
      unitOfTime = " Minutes ago.";
    } else {
      days = " ";
      unitOfTime = "just now";
    }
  }
  return (
    <div className="comments">
      <h4 className="comments__header">
        {props.currentComments.length} Comments
      </h4>
      <form className="comments__form">
        <div className="comments__image-container--form">
          <img src={props.userPic} alt="" className="comments__form-image" />
        </div>
        <div className="comments__form-textarea-container">
          <label htmlFor="newComment" className="comments__form-textarea-label">
            join the conversation
          </label>
          <textarea
            type="text"
            id="newComment"
            name="newComment"
            placeholder="Add a new comment"
            className="comments__form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="comments__form-button">
          <img src={addComment} alt="" className="comments__button-image" />
          Comment
        </button>
      </form>
      {props.currentComments.map(({ id, name, comment, likes, timestamp }) => (
        <div key={id} className="comments__comment-container">
          {test(timestamp)}
          <div className="comments__image-container--grey"></div>
          <div className="comments__comment-content-container">
            <h3 className="comments__name">{name}</h3>
            <p className="comments__date">{days + unitOfTime}</p>
            <p className="comments__comment">{comment}</p>
            {/* <p className='comment__likes'>{likes} Likes</p> will use at a later time */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;

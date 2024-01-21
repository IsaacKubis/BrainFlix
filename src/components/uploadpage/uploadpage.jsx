import './_uploadpage.scss';
import axios from 'axios';
// import thumbNailPic from '../../assets/images/Upload-video-preview.jpg';

function uploadPage() {
    async function handleSubmit(e) {
        e.preventDefault();
        if (e.target[0].value && e.target[1].value) {
            axios
            .post('http://localhost:8080/data/videos', {title:e.target[0].value, description: e.target[1].value})
            .then(res => {
                console.log(res.data)
            })
        }
    }

    return (
        <div className="upload">
            <div className='upload__header-container'>
                <h1 className="upload__header">Upload Video</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="upload__form-container">
                    <div className="upload__thumbnail-container">
                        <p className="upload__thumbnail-text">Video Thumbnail</p>
                        <div className='upload__thumbnail-img-container'>
                            <img src={'http://localhost:8080/static/images/Upload-video-preview.jpg'} alt="thumbnail img" className='upload__thumbnail-img'/>
                        </div>
                    </div>
                    <div className="upload__description-container">
                        <label className='upload__label'>Title your video</label>
                        <input type='text' className='upload__video-title' placeholder='Add a title to your video'></input>
                        <label className='upload__label'>Add a video description</label>
                        <textarea type='text' className='upload__textarea' placeholder='Add a description to your video' rows={4}></textarea>
                    </div>
                </div>
                <div className="upload__buttons-container">
                        <button className='upload__publish'>publish</button>
                        <button className='upload__cancel'>cancel</button>
                </div>
            </form>
        </div>
    );
}

export default uploadPage;
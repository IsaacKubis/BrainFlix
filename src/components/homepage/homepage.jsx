
import { useEffect, useState } from 'react';
import userPic from "../../assets/images/Mohan-muruge.jpg";
import axios from 'axios';
import VideoPlayer from '../videoplayer/videoplayer';
import VideoDescription from '../videodescription/videodescription';
import Comments from '../comments/comments';
import NextVideo from '../nextvideos/nextvideos';
import { useParams } from "react-router-dom";

function HomePage() {
    const {id} = useParams();
    const [currentVideoID, setCurrentVideoID] = useState()
    const [nextVideos,setNextVideos] = useState()
    const [currentVideo, setCurrentVideo] = useState()
    const [currentComments, setCurrentComments] = useState()

    useEffect(() => {
        fetchData();
    }, [id]);

    async function fetchData() {
        await axios
        .get('https://project-2-api.herokuapp.com/videos?api_key=339fbf44-caf6-4994-96e6-e0e59fbf51a2')
        .then((res) => {
            let data= res.data;
            setNextVideos(data)
            if (!id) {
                setCurrentVideoID(data[0].id)
                axios
                .get('https://project-2-api.herokuapp.com/videos/'+data[0].id+'?api_key=339fbf44-caf6-4994-96e6-e0e59fbf51a2')
                .then((res)=> {
                    console.log(res.data)
                    setCurrentVideo(res.data)
                    setCurrentComments(res.data.comments)
                })
            } else {
                setCurrentVideoID(id)
                axios
                .get('https://project-2-api.herokuapp.com/videos/'+id+'?api_key=339fbf44-caf6-4994-96e6-e0e59fbf51a2')
                .then((res)=> {
                    console.log(res.data)
                    setCurrentVideo(res.data)
                    setCurrentComments(res.data.comments)
                })
            }
        });
    }

function clickHandler(item) {
    setCurrentVideoID(item)
    window.scrollTo(0, 0);
}
if (!nextVideos || !currentVideo || !currentComments) {
    
} else {
    return (
    <div>
        <VideoPlayer VideoDetails={currentVideo} />
        <div className='flexForDesktop'>
            <div>
                <VideoDescription VideoDetails={currentVideo}/>
                <Comments userPic={userPic} currentComments={currentComments}/>
            </div>
            <div>
                <NextVideo nextVideos={nextVideos} currentVideoID={currentVideoID} clickHandler={clickHandler}/>
            </div>
        </div>
    </div>
    );
    }
}

export default HomePage;
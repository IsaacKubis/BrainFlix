import './App.scss';
import logo from "./assets/images/BrainFlix-logo.svg";
import userPic from "./assets/images/Mohan-muruge.jpg";
import uploadPic from './assets/images/icons/upload.svg';
import VideoJson from './data/videos.json';
import VideoDetails from './data/video-details.json';
import { useState } from 'react';

import Header from "./components/header/header";
import VideoPlayer from './components/videoplayer/videoplayer';
import VideoDescription from './components/videodescription/videodescription';
import Comments from './components/comments/comments';
import NextVideo from './components/nextvideos/nextvideos';

function App() {
  const [currentVideoID, setCurrentVideoID] = useState("84e96018-4022-434e-80bf-000ce4cd12b8")

  function clickHandler(item) {
    setCurrentVideoID(item)
  }

  return (
    <div>
      <Header logo={logo} userPic={userPic} uploadPic={uploadPic}/>
        <VideoPlayer VideoDetails={VideoDetails} currentVideoID={currentVideoID}/>

      <div className='flexForDesktop'>
        <div>
          <VideoDescription currentVideoID={currentVideoID} VideoDetails={VideoDetails}/>
          <Comments userPic={userPic} VideoDetails={VideoDetails} currentVideoID={currentVideoID}/>
        </div>
        <div>
          <NextVideo VideoJson={VideoJson} currentVideoID={currentVideoID} clickHandler={clickHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;

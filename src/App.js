import './App.scss';
import logo from "./assets/images/BrainFlix-logo.svg";
import userPic from "./assets/images/Mohan-muruge.jpg";
import uploadPic from './assets/images/icons/upload.svg';
import VideoJson from './data/videos.json';
import VideoDetails from './data/video-details.json';
import { useState } from 'react';

import Header from "./components/header/header";
import VideoPlayer from './components/videoplayer/videoplayer';
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
      <Comments userPic={userPic} VideoDetails={VideoDetails} currentVideoID={currentVideoID}/>
      <NextVideo VideoJson={VideoJson} currentVideoID={currentVideoID} clickHandler={clickHandler}/>
    </div>
  );
}

export default App;

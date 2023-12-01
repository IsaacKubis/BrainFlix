import './App.scss';
import logo from "./assets/images/BrainFlix-logo.svg";
import userPic from "./assets/images/Mohan-muruge.jpg";
import Header from "./components/header/header";
import uploadPic from './assets/images/icons/upload.svg';

function App() {
  return (
    <Header logo={logo} userPic={userPic} uploadPic={uploadPic}/>
  );
}

export default App;

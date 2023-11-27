import './App.scss';
import logo from "./assets/images/BrainFlix-logo.svg";
import userPic from "./assets/images/Mohan-muruge.jpg";
import Header from "./components/header/header";

function App() {
  return (
    <Header logo={logo} userPic={userPic} />
  );
}

export default App;

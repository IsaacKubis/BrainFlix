import "./_header.scss";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/BrainFlix-logo.svg";
import userPic from "../../assets/images/Mohan-muruge.jpg";


function Header(props) {
    const navigate = useNavigate();
    return (
        <header className="header">
            <div className="header__logo-container"  onClick={() => navigate(`/`)}>
            <img src={logo} alt="BrainFlix Logo" className="header__logo" />
            </div>
            <input
            type="search"
            className="header__search-bar"
            placeholder="Search"
            />
            <button className="header__button" type="" onClick={() => navigate(`/upload`)}>
            Upload
            </button>
            <div className="header__profile-image-container">
                <img
                    src={userPic}
                    alt="profile"
                    className="header__profile-picture"
                    height={40}
                    width={40}
                />
            </div>
        </header>
    );
}

export default Header;

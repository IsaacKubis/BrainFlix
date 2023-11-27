
function Header(props) {
    return (
        <header className="header">
            <img src={props.logo} alt="BrainFlix Logo" className="header__image" />
            <input type="search" className="header__search-bar" placeholder="Search"/>
            <button className="header__button">Upload</button>
            <div className="header__profile-image-container">
                <img src={props.userPic} alt="profile" className="header__profile-picture" height={40} width={40}/>
            </div>
        </header>
    )
}

export default Header;
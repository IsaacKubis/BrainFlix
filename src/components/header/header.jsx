
function Header(props) {
    return (
        <header className="header">
            <div className="header__logo-container"> 
                <img src={props.logo} alt="BrainFlix Logo" className="header__logo" />  
            </div>
            <input type="search" className="header__search-bar" placeholder="Search"/>
            <button className="header__button" type=""><img src={props.uploadPic} alt='publish img' className="header__button__img"/>Upload</button>
            <div className="header__profile-image-container">
                <img src={props.userPic} alt="profile" className="header__profile-picture" height={40} width={40}/>
            </div>
        </header>
    )
}

export default Header;
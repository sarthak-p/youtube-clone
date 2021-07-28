import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"; 
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";
 

function Header() {
    const [inputSearch, setInputSearch] = useState(''); 
    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon />
            <img
                className="header_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="Youtube logo"
                />
            </div>
        
            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder ="Search" type="text" />
                <Link to= {`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
            </div>
            
            <div className="header_icons">
                <VideoCallIcon className = "header_icon"/>
                <AppsIcon className = "header_icon"/>
                <NotificationsIcon className = "header_icon"/>
                 <Avatar
                    alt="Profile picture"
                    src="https://www.facebook.com/photo/?fbid=3091555994244291&set=a.104017852998135"
                />
            </div>
        </div>
    );
}

export default Header; 
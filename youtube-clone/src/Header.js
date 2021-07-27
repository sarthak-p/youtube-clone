import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css"; 
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';


function Header() {
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
                <input placeholder ="Search" type="text" />
                <SearchIcon className="header_inputButton"/>
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
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
  return (
      <div className = "sidebar">
          <SidebarRow selected Icon={HomeIcon} title="Home" />
          <SidebarRow Icon={WhatshotIcon} title="Trending" />
          <SidebarRow Icon={SubscriptionsIcon} title="Subscription" />
          <hr/>
          <SidebarRow Icon={VideoLibraryIcon} title="Subscription" />
          <SidebarRow Icon={HistoryIcon} title="Subscription" />
          <SidebarRow Icon={OndemandVideoIcon} title="Subscription" />
          <SidebarRow Icon={WatchLaterIcon} title="Subscription" />
          <SidebarRow Icon={ThumbUpAltIcon} title="Subscription" />
          <SidebarRow Icon={ExpandMoreIcon} title="Subscription" />
          <hr/>
    </div>
  );
}

export default Sidebar;
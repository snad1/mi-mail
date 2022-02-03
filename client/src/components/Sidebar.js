import React from 'react';
import {Button, IconButton} from "@material-ui/core";
import {Add as AddIcon,Inbox,Star,NearMe,Person as PersonIcon,Duo,Phone,ExpandMore} from "@material-ui/icons";
import SidebarOption from "./SidebarOption";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
      <div className="sidebar">
          <Button href="/compose" startIcon={<AddIcon fontSize="large"/>} className='sidebar_compos'>
              Compose
          </Button>

  
     <SidebarOption Icon={Inbox} title="Inbox" number={21} selected={true}/>
     <SidebarOption Icon={Star} title="Starred" number={14}/>
     <SidebarOption Icon={NearMe} title="Sent" number={30}/>
     <SidebarOption Icon={ExpandMore} title="More" number={3}/>
     <div className="sidebar_footer">
      <div className="sidebar_footerIcons">
          <IconButton>
              <PersonIcon/>
          </IconButton>
          <IconButton>
              <Duo/>
          </IconButton>
          <IconButton>
              <Phone/>
          </IconButton>
      </div>
      </div>
  </div>
  )
  
}

export default Sidebar;

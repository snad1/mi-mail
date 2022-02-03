import React from "react";
import { FiMenu, FiSearch} from "react-icons/fi"
import {Avatar, IconButton} from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import  NotificationsIcon from "@material-ui/icons/Notifications";



function Header (){
    return(
       <div className="header">
    
        <div className="header-left">
            <IconButton>
             <FiMenu/>
             </IconButton>
             <div className="mail-icon">
              <h3>MiMail</h3>
            </div>  
        </div>


        <div className="header-middle">
          <FiSearch/>
          <input placeholder="search mail" type="text"/>
          <ArrowDropDownIcon className = "header-input"/>
      </div>


        <div className="header-right">
        <IconButton>
             <AppsIcon/>
             </IconButton>
             <IconButton>
             <NotificationsIcon/>
             </IconButton>
             <Avatar/>
        </div>

        </div>
    )
}

export default Header;
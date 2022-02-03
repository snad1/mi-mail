import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import React from 'react';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RedoIcon from "@material-ui/icons/Redo";
import ChevronRightIcon  from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon  from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon  from '@material-ui/icons/KeyboardHide';
import SettingsIcon  from '@material-ui/icons/Settings';
import EmailRow from './EmailRow';


function EmailList() {
  return (
  <div className='emailList'>
   <div className='emailList_settings'>
       <div className='emailList_settingsLeft'>
      <Checkbox/>

      <IconButton>
          <ArrowDropDown/>
      </IconButton>
      <IconButton>
          <RedoIcon/>
      </IconButton>
      <IconButton>
          <MoreVertIcon/>
      </IconButton>
       </div>
       <div className='emailList_settingsRight'>
       <IconButton>
          <ChevronLeftIcon/>
      </IconButton>
      <IconButton>
          <ChevronRightIcon/>
      </IconButton>
      <IconButton>
          <SettingsIcon/>
      </IconButton>
      <IconButton>
          <KeyboardHideIcon/>
      </IconButton>
       </div>

   </div>
   <div className='emailList_list'>
       <EmailRow
       title="Pre-Mest"
       subject="mentor ass"
       description="Complete the front end"
       time="10pm"
       />
        <EmailRow
       title="Twitch"
       subject="my fellows"
       description="This is test"
       time="10pm"
       />
       </div>
  </div>
  )

}

export default EmailList;

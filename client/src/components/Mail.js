import React from 'react';
import {IconButton} from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';



function Mail() {
  return (
  <div className='mail'>
    <div className='mail_tools'>
<div className='mail_toolsLeft'> 
<IconButton>
  <ArrowBackIcon />
</IconButton>

<IconButton>
  <MoveToInboxIcon/>
</IconButton>

<IconButton>
  <ErrorIcon/>
</IconButton>

<IconButton>
  <DeleteIcon/>
</IconButton>

<IconButton>
  <MoreVertIcon/>
</IconButton>
</div>
    </div>
    <h1>Whats up</h1>
  </div>
  )
};

export default Mail;

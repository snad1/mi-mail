import React from "react";
import {Button, Divider, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography} from "@material-ui/core";
import {Add as AddIcon,Inbox,Star,NearMe,Person as PersonIcon,Duo,Phone,ExpandMore} from "@material-ui/icons";
import {Link} from "react-router-dom";


export default function() {
    return <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <Link to="/compose" style={{textDecoration: 'none'}}>
            <Button startIcon={<AddIcon fontSize="large"/>} className="sidebar_compos">
                Compose
            </Button>
        </Link>
        <MenuList>
            <Link to="/" style={{textDecoration: 'none'}}>
            <MenuItem >
                <ListItemIcon>
                    <Inbox fontSize="small" />
                </ListItemIcon>
                <ListItemText style={{color: 'rgba(0,0,0,0.87)'}}>Inbox</ListItemText>
            </MenuItem>
            </Link>
            <Divider />
        </MenuList>
    </Paper>
}
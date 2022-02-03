import React from "react";
import {Checkbox, IconButton} from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import EmailRow from "../../components/EmailRow";

export default function (){
    return <div className="emailList">
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
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
            <div className="emailList_settingsRight">
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
        <div className="emailList_list">
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
}
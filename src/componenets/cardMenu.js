import React from "react";
import "../styles/CardMenu.scss";
import {ReactComponent as Inbox} from "../images/svg/Inbox.svg"
import {ReactComponent as Explore} from "../images/svg/Explore.svg"
import {ReactComponent as Notifications } from "../images/svg/Notifications.svg"
import {ReactComponent as Bookmark} from "../images/svg/Bookmark.svg"




function CardMenu() {
    return <div className="CardMenu">
    <div className="interactions">
        <Notifications className="icon"/>
        <Explore className="icon"/>
        <Inbox className="icon"/>
    </div>
    <Bookmark className="icon"/>
    </div>
}


export default CardMenu;
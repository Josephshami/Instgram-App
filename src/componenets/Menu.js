import React from "react";
import "../styles/menu.scss"
import {ReactComponent as Home} from "../images/svg/home.svg"
import {ReactComponent as Inbox} from "../images/svg/Inbox.svg"
import {ReactComponent as Explore} from "../images/svg/Explore.svg"
import {ReactComponent as Notifications } from "../images/svg/Notifications.svg"
import {ReactComponent as Plus} from "../images/svg/Plus.svg"
import image from "../images/joseph.jpg"
import ProfileIcon from "./ProfileIcon"




function Menu () {
    return (
        <div className="menu">

            {/* here we are importing the svgs as components from svgfolder  */ }
            <Home className="icon"/>
            <Inbox className="icon"/>
            <Plus className="icon"/>
            <Explore className="icon"/>
            <Notifications className="icon"/>
                {/* profileIconComponent */}
                <ProfileIcon iconSize="small" image={image} storyBorder={true} />

        </div>
    )
}

export default Menu
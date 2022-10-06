import React from "react";
import "../styles/story.scss"
import ProfileIcon from "./ProfileIcon"
import users from "../data/users"



export default function Story () {
    // will give us the account names from the users folder 
    let accountName = users[Math.floor(Math.random() * users.length)].username;
    //instgram does that ... when the names are longer then 10 charcters
    if(accountName.length > 10) {
        accountName = accountName.substring(0, 10) + "...";
    }
    
    return (
    
      <div className="story">
          <ProfileIcon iconSize="big" storyBorder={true} />
          <span className="accountName">{accountName}</span>
      </div>
    )
  }


import React from "react";

import "../styles/ProfileIcon.scss"

function ProfileIcon(props) {
    const {iconSize, storyBorder, image} = props;
    //function that takes the 70 pravatar website that will give us a random number between 0 and 17
    function getRandomInt(min,max) {
        min = Math.ceil(min);
        max=   Math.floor(max);
        return Math.floor(Math.random() * (max -min +1)) + min ; 
    }
    // this varibele give us randome pic from 1 to 70
    let randomId = getRandomInt(1, 70)
    // if it doesn't exist we will use that https to give us randome pic , and if it exists we will store it in the first pic order
let profileImage = image 
? image  
: `https://i.pravatar.cc//150?img=${randomId}`

    return (
        <div className={storyBorder ? "storyBorder" : ""}>
            <img className={`profileIcon ${iconSize}`} 
            src={profileImage} 
            alt="profile" />
        </div>
    )
}
export default ProfileIcon
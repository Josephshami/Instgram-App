import React from "react";
import "../styles/card.scss";
import Profile from "./Profiles";
import { ReactComponent as CardButton } from "../images/svg/threedot.svg";
import CardMenu from "./cardMenu";
import Comment from "./Comment";
function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;
  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src={image} alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideAccountName={true} />
        <span>
          Liked by <strong>{likedByText}</strong> and {" "} <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map(comments=> {
          return ( 
            <Comment key={comments.id}
            accountName={comments.user}
            comment={comments.text}
            
            />
          )
        })}
      </div>
      <div className="timePosted">
        {hours} HOURS AGO
      </div>
      <div className="addComment">
        Add a comment ...
        <h3 className="postText">
          Post a Text
      </h3>
      </div>
     
    </div>
  );
}
export default Card;

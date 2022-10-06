import React from "react";
import "../styles/Comments.scss";


function Comments(props) {
const {accountName,comment} = props;


    return( <div className="commentContainer">
        <div className="accountName">{accountName}</div>
        <div className="comment">{comment}</div>
        

    </div>
    )
}
    

export default Comments;
import React from "react";
import "../styles/cards.scss";
import Card from "./Card";
import Stories from "./Stories"
function Cards() {
  const commentsOne= [
     {
       user: "raffgarasstti",
       text:"Woha dude, this is Awsome!",
       id : 1
    
  }, 
  {
    user: "thearekdossdfkds",
    text:"Like!",
    id : 2
  },
  {
    user: "mapvault",
    text:"Niceeeeee!",
    id : 3
  },
  {
    user: "tapdaöxxc",
    text:"Amazing content , keep it up !",
    id : 4
  },
  {
    user: "afgfgfyxcy",
    text:"Woooooooooow !",
    id : 5
  },
  ]
    return (
      <div className="cards">
          <Stories/>


          <Card accountName="raffgarasstti"
           storyBorder= {true} 
           image="https://picsum.photos/800/900"
           // here we are taking the comments from the commentsOne varible 
           comments={commentsOne}
           likedByNumber={14}
           // regualr base we got this hours and the rest from BACKEND
           hours={16}
           />
                <Card accountName="raffgarasstti"
           storyBorder= {true} 
           image="https://picsum.photos/800/1000"
           // here we are taking the comments from the commentsOne varible 
           comments={commentsOne}
           likedByNumber={15533}
           // regualr base we got this hours and the rest from BACKEND
           hours={17}
           />
                <Card accountName="raffgarasstti"
           storyBorder= {true} 
           image="https://picsum.photos/800"
           // here we are taking the comments from the commentsOne varible 
           comments={commentsOne}
           likedByNumber={12}
           // regualr base we got this hours and the rest from BACKEND
           hours={16}
           />
                <Card accountName="raffgarasstti"
           storyBorder= {true} 
           image="https://picsum.photos/800/1100"
           // here we are taking the comments from the commentsOne varible 
           comments={commentsOne}
           likedByNumber={24}
           // regualr base we got this hours and the rest from BACKEND
           hours={18}
           />
                <Card accountName="raffgarasstti"
           storyBorder= {true} 
           image="https://picsum.photos/800/1200"
           // here we are taking the comments from the commentsOne varible 
           comments={commentsOne}
           likedByNumber={89}
           // regualr base we got this hours and the rest from BACKEND
           hours={1}
           />
      </div>
    )
  }
export default Cards
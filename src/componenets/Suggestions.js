import "../styles/suggestions.scss"
import Profile from "./Profiles"

function Suggestions() {
return(
    <div className="Suggestions">
    <div className="titleContainer">
        <div className="title"/> Suggestions For You<div/>
        <a href="/">See All</a>
    </div>

    <Profile
  caption="Followed by mapvault + 34 more "
   urlText="Follow"
   iconSize = "medium"
   captionSize="small"
   storyBorder= {true}
   />
    <Profile
  caption="Followed by mapvault + 156 more "
   urlText="Follow"
   iconSize = "medium"
   captionSize="small"
   />

    <Profile
  caption="Followed by mapvault + 173 more "
   urlText="Follow"
   iconSize = "medium"
   captionSize="small"
   />
    <Profile
  caption="Followed by mapvault + 22 more "
   urlText="Follow"
   iconSize = "medium"
   captionSize="small"
   storyBorder= {true}
   />
    <Profile
  caption="Followed by mapvault + 20033 more "
   urlText="Follow"
   iconSize = "medium"
   captionSize="small"
   storyBorder= {true}
   />
 
    </div>
)
}
export default Suggestions 
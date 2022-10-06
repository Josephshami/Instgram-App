import React from "react";
import "../styles/sidebar.scss"
import Sticky from "react-sticky-el"
import Profile from "./Profiles"
import Suggestions from "./Suggestions"
import Footer from "./Footer"
import image from "../images/joseph.jpg"



function SideBar() {
  return (
      <Sticky topOffset={-80}>
        <div className="sidebar">
          <Profile username="Joseph.shami" 
          caption="Joseph Shami" 
          urlText="Switch"
          iconSize="big" 
          image={image}/>
          <Suggestions/>
          <Footer/>
        </div>

      </Sticky>
  )
}
export default SideBar

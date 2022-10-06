import React from "react";
import "../styles/navigation.scss";
import logo from "../images/Instagram_logo.svg.png"
import search from "../images/Search.png"
import Menu from "./Menu"



function Navigation () {
    return (
    <div className="navigation">
        <div className="container">
        <img className="logo" src={logo} alt="instgram logo" /> 
        <div className="search">
            <img className="searchIcon" src={search} alt="searchIcon" />
        <span className="searchText">Search</span>
        </div>
        <Menu/>
        </div>
    </div>
    )
}

export default Navigation
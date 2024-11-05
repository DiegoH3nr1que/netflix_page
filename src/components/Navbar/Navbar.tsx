import React from "react";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import  './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by languages</li>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="" className="" />
        <p>Children</p>
        <img src={bell_icon} alt="" className="" />
        <div className="">
        <img src={profile_icon} alt="" className="" />
        <img src={caret_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

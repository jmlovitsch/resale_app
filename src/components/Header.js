import React from "react";
import { NavLink } from "react-router-dom";
import logo192 from "../images/logo192.png"

const Header = () => {
  return (
<nav id="navbar">
    <img src={logo192} alt="logo192" height="75" id="header-logo" />
      <nav className="header" >
          <NavLink to="/home" >Home</NavLink>
          <NavLink to="/vestments" >Vestments</NavLink>
          <NavLink to="/altarware" >Altarware</NavLink>
          <NavLink to="/artwork" >Artwork</NavLink>
      </nav>
      </nav>
  );
};

export default Header;

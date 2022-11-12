import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <h3>Multi Fitness Gym</h3>
    </div>
  );
};

export default Header;

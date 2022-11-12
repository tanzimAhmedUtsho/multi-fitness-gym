import React from "react";
import "./Activities.css";
import Img from "../../images/pp=01.png";

const Activities = () => {
  return (
    <div className="activities-container">
      <div>
        <h2>Select You Activities</h2>
      </div>
      <div>
        <img className="images" src={Img} alt="" />
        <h3>Tanzim Ahmed Utsho</h3>
        <h4>Dhaka,Bangladesh</h4>
      </div>
    </div>
  );
};

export default Activities;

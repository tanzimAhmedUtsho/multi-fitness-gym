import React from "react";
import Img from "../../images/pp=01.png";
import "./CartActivities.css";

const CartActivities = () => {
  return (
    <div className="cart">
      <div>
        <img className="images" src={Img} alt="" />
        <h3>Tanzim Ahmed Utsho</h3>
        <h4>Dhaka,Bangladesh</h4>
      </div>
      <div className="person-details">
        <p>Weight:75kg</p>
        <p>Height:6.1</p>
        <p>Age:25yrs</p>
      </div>

      <p>Add A break</p>
      <div className="time-break">
        <p>5s</p>
        <p>15s</p>
        <p>25s</p>
        <p>35s</p>
        <p>45s</p>
      </div>
    </div>
  );
};

export default CartActivities;

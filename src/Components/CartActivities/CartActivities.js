import React, { useState } from "react";
import Img from "../../images/pp=01.png";
import "./CartActivities.css";

const CartActivities = ({ totalTime }) => {
  const [breakTime, setBreakTime] = useState(
    localStorage.getItem("breakTime") || 0
  );
  const handleAddBreakTime = (time) => {
    localStorage.setItem("breakTime", time);
    setBreakTime(time);
  };
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
        <button className="button" onClick={() => handleAddBreakTime(5)}>
          5s
        </button>
        <button className="button" onClick={() => handleAddBreakTime(15)}>
          15s
        </button>
        <button className="button" onClick={() => handleAddBreakTime(25)}>
          25s
        </button>
        <button className="button" onClick={() => handleAddBreakTime(35)}>
          35s
        </button>
        <button className="button" onClick={() => handleAddBreakTime(45)}>
          45s
        </button>
      </div>
      <div className="totalAndBreak">
        <div>Total Time</div>
        <div>{totalTime} Second</div>
      </div>
      <div className="totalAndBreak">
        <div>Break Time</div>
        <div>{breakTime} Second</div>
      </div>
      <button className="activityButton">Add Activity</button>
    </div>
  );
};

export default CartActivities;

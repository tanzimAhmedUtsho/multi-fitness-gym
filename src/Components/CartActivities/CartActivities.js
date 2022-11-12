import React, { useState } from "react";
import Img from "../../images/pp=01.png";
import "./CartActivities.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartActivities = ({ totalTime }) => {
  const [breakTime, setBreakTime] = useState(
    localStorage.getItem("breakTime") || 0
  );
  const handleAddBreakTime = (time) => {
    localStorage.setItem("breakTime", time);
    setBreakTime(time);
  };
  const showToast = () =>
    toast.success(
      <div>
        <h6>Congratulations Tanzim!!!!!!!!</h6>
        <p>Your exercise time {totalTime} second</p>
        <p>You break time {breakTime} second</p>
      </div>
    );
  return (
    <div className="cart">
      <div className="row row-cols-2 mb-3 align-items-center">
        <img className="profileImages rounded-circle" src={Img} alt="" />
        <div>
          <div>Tanzim Ahmed Utsho</div>
          <div>Dhaka,Bangladesh</div>
        </div>
      </div>
      <div className="person-details">
        <p>Weight:75kg</p>
        <p>Height:6.1</p>
        <p>Age:25yrs</p>
      </div>

      <p>Add A break</p>
      <div className="time-break d-flex flex-wrap">
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
      <button className="activityButton" onClick={showToast}>
        Add Activity
      </button>
      <ToastContainer
        position="bottom-right"
        closeOnClick
        pauseOnHover
        newestOnTop={false}
        theme="colored"
      />
    </div>
  );
};

export default CartActivities;

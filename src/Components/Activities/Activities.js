import React, { useEffect, useState } from "react";
import "./Activities.css";
import Img from "../../images/pp=01.png";
import Exercise from "../Exercise/Exercise.js";

const Activities = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  return (
    <div className="activities-container">
      <div>
        <h2>Select You Activities</h2>
        <div className="workout">
          {workouts.map((workout) => (
            <Exercise key={workout.id} workout={workout}></Exercise>
          ))}
        </div>
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

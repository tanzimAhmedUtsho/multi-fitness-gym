import React, { useEffect, useState } from "react";
import "./Activities.css";

import Exercise from "../Exercise/Exercise.js";
import CartActivities from "../CartActivities/CartActivities";

const Activities = () => {
  const prevTime = parseInt(localStorage.getItem("totalTime"));
  const [workouts, setWorkouts] = useState([]);
  const [totalTime, setTotalTime] = useState(prevTime || 0);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setWorkouts(data));
  }, []);
  const handleAddToList = (time) => {
    console.log(typeof time, time);
    localStorage.setItem("totalTime", totalTime + time);
    setTotalTime(totalTime + time);
  };
  return (
    <div className="activities-container">
      <div>
        <h2>Select You Activities</h2>
        <div className="workout">
          {workouts.map((workout) => (
            <Exercise
              key={workout.id}
              workout={workout}
              handleAddToList={handleAddToList}
            ></Exercise>
          ))}
        </div>
      </div>
      <div className="calculation-activities-container">
        <CartActivities totalTime={totalTime}></CartActivities>
      </div>
    </div>
  );
};

export default Activities;

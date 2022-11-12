import React, { useEffect, useState } from "react";
import "./Activities.css";

import Exercise from "../Exercise/Exercise.js";
import CartActivities from "../CartActivities/CartActivities";
import Questions from "../Questions/Questions";

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
    <div className="row container mx-auto">
      <div className="col col-md-8 col-sm-6">
        <h2>Select You Activities</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {workouts.map((workout) => (
            <Exercise
              key={workout.id}
              workout={workout}
              handleAddToList={handleAddToList}
            ></Exercise>
          ))}
        </div>
        <Questions />
      </div>
      <div className="col col-md-4 col-sm-6">
        <CartActivities totalTime={totalTime}></CartActivities>
      </div>
    </div>
  );
};

export default Activities;

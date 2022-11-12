import React, { useEffect, useState } from "react";
import "./Activities.css";

import Exercise from "../Exercise/Exercise.js";
import CartActivities from "../CartActivities/CartActivities";

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
      <div className="calculation-activities-container">
        <CartActivities></CartActivities>
      </div>
    </div>
  );
};

export default Activities;

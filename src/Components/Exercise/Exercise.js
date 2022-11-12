import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { img, name, description, time } = props.workout;
  return (
    <div className="exercise">
      <img className="img" src={img} alt="" />
      <p className="exercise-name">{name}</p>
      <div className="workout-info{">
        <p>{description}</p>
        <p>
          <small>Time: {time}s</small>
        </p>
      </div>
      <button className="btn-list">
        <p>Add To List</p>
      </button>
    </div>
  );
};

export default Exercise;

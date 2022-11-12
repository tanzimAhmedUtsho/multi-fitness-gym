import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { img, name, description, time } = props.workout;
  return (
    <div className="col">
      <div className="card h-100 border-danger rounded-4">
        <img src={img} className="card-img-top img p-2 shadow-lg" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <span>{description}</span>
        </div>
        <p className="fs-3">
          <small>Time: {time}s</small>
        </p>
        <div className="card-footer ">
          <button
            className="btn btn-primary w-100 shadow-lg"
            onClick={() => {
              props.handleAddToList(time);
            }}
          >
            <>Add To List</>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;

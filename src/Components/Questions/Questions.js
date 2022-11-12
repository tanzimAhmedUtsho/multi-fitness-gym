import React from "react";

const Questions = () => {
  return (
    <div className="accordion mt-5" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            How does react work?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            ReactJS divides the UI into isolated reusable pieces of code known
            as components. React components work similarly to JavaScript
            functions as they accept arbitrary inputs called properties or
            props. It's possible to have as many components as necessary without
            cluttering your code.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Difference between props and state
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            Props are passed via component properties, they're not reactive.
            State are variables that react will react , updating the UI when
            values changes. I think what is meant by "props should not be
            changed" is that they should not be changed by children
            components.While both hold information that influences the output of
            render, they are different in one important way: props get passed to
            the component (similar to function parameters) whereas state is
            managed within the component (similar to variables declared within a
            function).
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            What is the use of useEffect in React?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            The useEffect Hook allows you to perform side effects in your
            components. Some examples of side effects are: fetching data,
            directly updating the DOM, and timers. useEffect accepts two
            arguments. The second argument is optional.The motivation behind the
            introduction of useEffect Hook is to eliminate the side-effects of
            using class-based components. For example, tasks like updating the
            DOM, fetching data from API end-points, setting up subscriptions or
            timers, etc can be lead to unwarranted side-effects.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

import React from "react";

const Button = (props) => {
  if (props.color === "primary") {
    return (
      <div className="">
        <button className="bg-primary text-black py-1 px-3 rounded hover:shadow-btn hover:shadow-primary transition-shadow ease-in-out duration-300">
          {props.children}
        </button>
      </div>
    );
  } else if (props.color === "secondary") {
    return (
      <div className="">
        <button className="bg-secondary text-black py-1 px-3 rounded hover:shadow-btn hover:shadow-secondary transition-shadow ease-in-out duration-300">
          {props.children}
        </button>
      </div>
    );
  }
};

export default Button;

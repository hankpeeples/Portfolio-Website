import React from "react";

const Button = (props) => {
  return (
    <button
      className={`${props.color} py-1 px-3 rounded hover:shadow-btn transition-shadow ease-in-out duration-300`}
    >
      {props.children}
    </button>
  );
};

export default Button;

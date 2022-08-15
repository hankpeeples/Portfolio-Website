import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  let navigate = useNavigate();

  return (
    <button
      className={`${props.colors} py-1 px-3 rounded hover:shadow-btn transition-shadow ease-in-out duration-300`}
      onClick={() => navigate(props.link)}
    >
      {props.children}
    </button>
  );
};

export default Button;

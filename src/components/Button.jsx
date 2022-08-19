import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  let navigate = useNavigate();

  if (props.disabled) {
    return (
      <button className="bg-zinc-700 text-zinc-400 py-1 px-3 rounded cursor-not-allowed">
        {props.children}
      </button>
    );
  }

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

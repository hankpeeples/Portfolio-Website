import React from "react";

const BioYear = (props) => {
  return (
    <div className="flex pt-2">
      <div className="text-lg flex ">
        <span className="font-proximaBold pr-5">{props.year}</span>
        {props.children}
      </div>
    </div>
  );
};

export default BioYear;

import React from "react";

const BioYear = (props) => {
  return (
    <div className="flex pt-2">
      <div className="text-md md:text-lg flex">
        <span className="font-proximaBold mr-5">{props.year}</span>
        {props.children}
      </div>
    </div>
  );
};

export default BioYear;

import React from "react";
import BioYear from "./BioYear";

const Bio = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex flex-col md:w-1/2 p-5 pt-10">
        <h2 className="text-lg md:text-xl font-proximaBold underline justify-start">
          Bio
        </h2>
        <BioYear year="1999">Born in Plano, Texas</BioYear>
        <BioYear year="2023">
          Graduated from The University of North Texas with a bachelors degree in
          Computer Science (GPA?)
        </BioYear>
      </div>
    </div>
  );
};

export default Bio;

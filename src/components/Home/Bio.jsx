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
        <BioYear year="2018">
          Started college at the University of Texas A&M Corpus Christi
        </BioYear>
        <BioYear year="2020">
          (Present) Attending the University of North Texas in pursuit of a bachelors
          degree in Computer Science
        </BioYear>
      </div>
    </div>
  );
};

export default Bio;

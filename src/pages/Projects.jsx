import React from "react";
import ProfileCard from "../components/Projects/ProfileCard";

const Projects = () => {
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 h-fit p-3 mt-10 gap-10">
        <h1 className="text-3xl font-proximaBold underline">My Projects</h1>
        <ProfileCard />
      </div>
    </div>
  );
};

export default Projects;

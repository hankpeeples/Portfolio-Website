import React from "react";
import ProfileSection from "./ProfileSection";
import Socials from "./Socials";

const MyInfo = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 justify-center items-center h-fit p-3">
        <ProfileSection />
        <Socials />
      </div>
    </div>
  );
};

export default MyInfo;

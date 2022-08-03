import React from "react";
import ProfileSection from "./ProfileSection";

const MyInfo = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex w-screen md:w-2/3 lg:w-1/2 justify-center items-center h-fit p-3">
        <ProfileSection />
      </div>
    </div>
  );
};

export default MyInfo;

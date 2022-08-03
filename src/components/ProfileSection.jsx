import React from "react";
import HeadingSvg from "./HeadingSvg";

const ProfileSection = (props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeadingSvg
        width="300px"
        height="315px"
        theme={{ accentColor: "#D36582", skinColor: "#E6B99B", dark: "#1f1f1f" }}
      />
      <div className="flex md:flex-row flex-col justify-center items-center">
        <div className="flex-col justify-center items-center pb-5 md:pr-10 ">
          <h1 className="font-proximaBold text-xl md:text-3xl">Henry Peeples</h1>
          <h3 className="text-lg md:text-2xl">Developer / Tech enthusiast</h3>
        </div>
        <div className="w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem] rounded-full overflow-hidden outline">
          <img src={require("../assets/tempPhoto.jpeg")} alt="Personal logo" />
        </div>
      </div>
      <p className="p-5 before:mr-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus
        velit eget risus malesuada vestibulum. Fusce lacinia placerat diam sed
        euismod. Nam tempus pellentesque eleifend. Sed non nulla a lacus malesuada
        vulputate. Aliquam malesuada dolor at sapien sodales semper. Morbi non
        viverra est. Duis auctor semper est ac bibendum. Sed a cursus risus. Aenean
        viverra lectus at vestibulum sagittis. Nullam molestie accumsan augue, eu
        pulvinar ex luctus in.
      </p>
    </div>
  );
};

export default ProfileSection;

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
          <h1 className="font-proximaBold text-2xl md:text-3xl">Henry Peeples</h1>
          <h3 className="text-xl md:text-2xl">Developer / Tech enthusiast</h3>
        </div>
        <div className="w-[4.5rem] h-[4.5rem] md:w-[6rem] md:h-[6rem] rounded-full overflow-hidden outline">
          <img src={require("../assets/tempPhoto.jpeg")} alt="Personal logo" />
        </div>
      </div>
      <p className="p-2 text-lg pt-10 before:mr-10">
        I am a GoLang developer currently based in Denton, Tx. I have a passion for
        all things technology and love working with others on projects. I enjoy every
        part of development such as planning, designing, and the actual building of
        the application. When I am not programming or learning, I enjoy playing
        guitar, listening to music, watching movies, and playing golf.
      </p>
    </div>
  );
};

export default ProfileSection;

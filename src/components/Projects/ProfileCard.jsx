import React, { useEffect, useState } from "react";
import axios from "axios";
import { LinkOut } from "akar-icons";

const ProfileCard = () => {
  const [githubProfile, setGithubProfile] = useState({});
  const [githubRepos, setGithubRepos] = useState({});

  useEffect(() => {
    console.log("Fetching");
    axios
      .get("https://api.github.com/users/hankpeeples")
      .then((res) => {
        setGithubProfile(res.data);
      })
      .catch((err) => console.log("Failed to fetch github profile: ", err));
  }, []);

  useEffect(() => {
    console.log("Fetching projects");
    axios
      .get("https://api.github.com/users/hankpeeples/repos")
      .then((res) => {
        setGithubRepos(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("Failed to fetch projects: " + err));
  }, []);

  return (
    <a
      href={githubProfile.html_url}
      target="_blank"
      rel="noreferrer"
      className="flex bg-backgroundAlt text-black py-2 px-6 rounded-md w-fit gap-3 hover:shadow-btn hover:shadow-backgroundAlt cursor-pointer transition-shadow ease-in-out duration-300"
    >
      <div className="flex gap-5 justify-center items-center">
        <img
          className="rounded-full w-[60px]"
          src={githubProfile.avatar_url}
          alt="Github Profile Avatar"
        />
        <div className="flex flex-col justify-center">
          <p className="font-proximaBold">{githubProfile.name}</p>
          <p className="text-zinc-800 text-sm">@{githubProfile.login}</p>
        </div>
        <LinkOut className="" strokeWidth={2} size={16} />
      </div>
    </a>
  );
};

export default ProfileCard;

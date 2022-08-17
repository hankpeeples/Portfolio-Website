import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "../components/Projects/ProfileCard";
import Loading from "../components/Loading";
import RepoCard from "../components/Projects/RepoCard";

const Projects = () => {
  const [loading, setLoading] = useState(false);
  const [githubRepos, setGithubRepos] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/hankpeeples/repos")
      .then((res) => {
        setGithubRepos(res.data);
      })
      .catch((err) => console.log("Failed to fetch projects: " + err))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 h-fit p-3 mt-10 gap-10">
        <h1 className="text-3xl font-proximaBold underline">My Projects</h1>
        {loading ? (
          <Loading />
        ) : (
          <>
            <ProfileCard />
            <RepoCard data={githubRepos} />
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;

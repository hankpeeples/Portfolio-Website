import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import RepoCard from "../components/Projects/RepoCard";

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [githubRepos, setGithubRepos] = useState([{}]);
  const [fetchError, setFetchError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.github.com/users/hankpeeples/subscriptions")
      .then((res) => {
        setGithubRepos(res.data);
      })
      .catch((err) => {
        setFetchError({
          err: "Unable to fetch repository information... Please try again later.",
          msg: err.message,
        });
        console.log(
          "[ERROR]: Unable to fetch repository information... " + err.message
        );
      });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (fetchError !== undefined) {
    return (
      <div className="flex w-screen h-screen justify-center">
        <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 h-fit p-3 mt-10 items-center bg-accent rounded-md">
          <p className="font-proximaBold text-lg">{fetchError.err}</p>
          <p className="mt-5">{fetchError.msg}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen justify-center overflow-scroll">
      <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 h-fit p-3 mt-10 gap-10">
        <h1 className="text-3xl font-proximaBold underline">My Projects</h1>
        {loading || githubRepos === undefined ? (
          <Loading />
        ) : (
          <div className="flex flex-row flex-wrap gap-10 justify-between">
            {githubRepos.reverse().map((value, index) => {
              if (value.name !== "hankpeeples")
                return <RepoCard data={value} key={index} />;
              else return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

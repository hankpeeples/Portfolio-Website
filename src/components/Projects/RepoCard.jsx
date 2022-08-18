import React from "react";
import { LinkOut, GithubFill } from "akar-icons";

const RepoCard = ({ data }, key) => {
  let date = new Date(data.created_at);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dt = date.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  date = month + "/" + dt + "/" + year;

  return (
    <div
      className="flex flex-col w-full lg:w-[45%] rounded-md bg-white text-black p-5 hover:shadow-lg hover:shadow-gray-400 hover:translate-y-[-1px] transition-all ease-in-out duration-300 select-none"
      key={key}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="font-proximaBold text-xl flex justify-center items-center hover:underline hover:text-blue-600"
        >
          {data.name} <LinkOut className="ml-2" strokeWidth={2} size={14} />
        </a>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <p className="my-3">{data.description || "No description available."}</p>
      <div className="flex flex-row flex-wrap gap-1">
        {data.topics.map((topic, index) => (
          <div
            className="px-2 py-0.5 rounded-full bg-primary w-fit justify-center items-center"
            key={index}
          >
            <p className="text-xs">{topic}</p>
          </div>
        ))}
      </div>
      {data.owner.login !== "hankpeeples" ? (
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="flex bg-secondary px-2 py-1 rounded-md w-fit">
            <p className="text-xs">Collaboration</p>{" "}
          </div>
          <a
            href={data.owner.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center items-center hover:underline hover:text-blue-600"
          >
            <GithubFill height={16} width={16} />
            <p className="text-xs ml-1">@{data.owner.login}</p>
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default RepoCard;

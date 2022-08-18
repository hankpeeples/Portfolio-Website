import React from "react";
import { LinkOut } from "akar-icons";

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
      className="flex flex-col w-[47%] rounded-md bg-white text-black p-5 hover:shadow-lg hover:shadow-gray-400 hover:translate-y-[-1px] transition-all ease-in-out duration-300 justify-between"
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
      <p className="mt-2">{data.description || "No description available."}</p>
      <div className="mt-2 px-2 py-0.5 rounded-full bg-primary w-fit justify-center items-center">
        <p className="text-xs">{data.language}</p>
      </div>
    </div>
  );
};

export default RepoCard;

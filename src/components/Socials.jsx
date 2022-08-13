import React from "react";
import { GithubFill, TwitterFill, InstagramFill } from "akar-icons";

const Socials = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col lg:w-1/3 md:w-1/3 w-1/2 h-fit justify-between items-center pt-6">
        <div className="flex flex-row gap-x-11 pt-3">
          <div className="p-1 hover:text-primary hover:shadow-social rounded transition-all ease-in-out duration-300">
            <a
              href="https://github.com/hankpeeples"
              target="_blank"
              rel="noreferrer"
            >
              <GithubFill strokeWidth={2} size={30} />
            </a>
          </div>
          <div className="p-1 hover:text-[#1DA1F2] hover:shadow-social hover:shadow-[#1DA1F2] rounded transition-all ease-in-out duration-300">
            <a
              href="https://twitter.com/HankPeeples"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterFill strokeWidth={2} size={30} />
            </a>
          </div>
          <div className="p-1 hover:text-[#F56040] hover:shadow-social hover:shadow-[#F56040]  rounded transition-all ease-in-out duration-300">
            <a
              href="https://www.instagram.com/hankpeeples1/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramFill strokeWidth={2} size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;

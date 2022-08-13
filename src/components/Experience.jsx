import React from "react";
import GithubLogo from "../Icons/github.svg";
import Git from "../Icons/git.svg";
import Linux from "../Icons/linux.svg";
import MySql from "../Icons/mysql.svg";
import SSHIcon from "../Icons/ssh.svg";
import CIcon from "../Icons/c.svg";
import Cpp from "../Icons/cplusplus.svg";
import Go from "../Icons/go.svg";
import Java from "../Icons/java.svg";
import JSIcon from "../Icons/javascript.svg";
import TSIcon from "../Icons/typescript.svg";

const Experience = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 h-fit p-5 pt-10">
        <h2 className="flex text-lg md:text-xl font-proximaBold underline justify-start">
          Languages, Frameworks, Tools
        </h2>
        <div className="flex flex-row gap-6 pt-2">
          <img src={Go} alt="Go Icon" height={46} width={46} />
          <img src={Java} alt="Java Icon" height={46} width={46} />
          <img src={Cpp} alt="Cpp Icon" height={46} width={46} />
          <img src={CIcon} alt="C Icon" height={46} width={46} />
          <img src={JSIcon} alt="JSIcon Icon" height={46} width={46} />
          <img src={TSIcon} alt="TSIcon Icon" height={46} width={46} />
        </div>
        <div className="flex flex-row gap-6 pt-3">
          <img src={GithubLogo} alt="Github Icon" height={46} width={46} />
          <img src={Git} alt="Git Icon" height={46} width={46} />
          <img src={SSHIcon} alt="SSH Icon" height={46} width={46} />
          <img src={Linux} alt="Linux Icon" height={46} width={46} />
          <img src={MySql} alt="MySql Icon" height={46} width={46} />
        </div>
      </div>
    </div>
  );
};

export default Experience;

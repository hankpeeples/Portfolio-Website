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
import ReactIcon from "../Icons/react.svg";
import VSCode from "../Icons/vscode.svg";
import DockerIcon from "../Icons/docker.svg";
import IntellijIcon from "../Icons/intellij.svg";
import Trello from "../Icons/trello.svg";
import ReactTooltip from "react-tooltip";

const Experience = () => {
  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex flex-col w-screen md:w-2/3 lg:w-1/2 h-fit p-5 pt-10">
        <h2 className="flex text-lg md:text-xl font-proximaBold underline justify-start">
          Languages, Frameworks, Tools
        </h2>
        <ReactTooltip
          place="top"
          type="info"
          effect="solid"
          className="!font-proximaBold !text-[16px]"
        />
        <div className="flex flex-row gap-8 pt-3">
          <img data-tip="Golang" src={Go} alt="Go Icon" height={46} width={46} />
          <img data-tip="Java" src={Java} alt="Java Icon" height={46} width={46} />
          <img data-tip="C++" src={Cpp} alt="Cpp Icon" height={46} width={46} />
          <img data-tip="C" src={CIcon} alt="C Icon" height={46} width={46} />
          <img
            data-tip="JavaScript"
            src={JSIcon}
            alt="JSIcon Icon"
            height={46}
            width={46}
          />
          <img
            data-tip="TypeScript"
            src={TSIcon}
            alt="TSIcon Icon"
            height={46}
            width={46}
          />
        </div>
        <div className="flex flex-row gap-8 pt-4">
          <img
            data-tip="Github"
            src={GithubLogo}
            alt="Github Icon"
            height={46}
            width={46}
          />
          <img data-tip="Git" src={Git} alt="Git Icon" height={46} width={46} />
          <img data-tip="SSH" src={SSHIcon} alt="SSH Icon" height={46} width={46} />
          <img
            data-tip="MySql"
            src={MySql}
            alt="MySql Icon"
            height={46}
            width={46}
          />
          <img
            data-tip="React"
            src={ReactIcon}
            alt="React Icon"
            height={46}
            width={46}
          />
        </div>
        <div className="flex flex-row gap-8 pt-4">
          <img
            data-tip="Docker"
            src={DockerIcon}
            alt="Docker Icon"
            height={46}
            width={46}
          />
          <img
            data-tip="Trello"
            src={Trello}
            alt="Trello Icon"
            height={46}
            width={46}
          />
          <img
            data-tip="Intellij IDEs"
            src={IntellijIcon}
            alt="Intellij Icon"
            height={46}
            width={46}
          />
          <img
            data-tip="VSCode"
            src={VSCode}
            alt="VSCode Icon"
            height={46}
            width={46}
          />
          <img
            data-tip="Linux"
            src={Linux}
            alt="Linux Icon"
            height={46}
            width={46}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;

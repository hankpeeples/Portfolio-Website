import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center sticky top-0 bg-[#2f2f2fea]">
      <div className="flex flex-col md:flex-row lg:w-1/2 md:w-2/3 w-screen h-fit justify-between items-center p-3">
        <img width="200em" src={require("../assets/logo.png")} alt="Personal logo" />
        <div className="flex flex-row pt-5 md:pt-0 gap-8">
          <Button
            color="bg-primary text-black hover:shadow-primary"
            link="/projects"
          >
            Projects
          </Button>
          <Button
            color="bg-secondary text-black hover:shadow-secondary"
            link="/posts"
          >
            Posts
          </Button>
          <Button color="bg-accent text-white hover:shadow-accent">
            Contact Me!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

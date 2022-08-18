import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center sticky top-0 bg-[#2f2f2fea]">
      <div className="flex flex-col md:flex-row lg:w-1/2 md:w-2/3 w-screen h-fit justify-between items-center p-3">
        <img
          className="hover:cursor-pointer"
          width="200em"
          src={require("../assets/logo.png")}
          alt="Personal logo"
          onClick={() => navigate("/")}
        />
        <div className="flex flex-row pt-5 md:pt-0 gap-8">
          <Button colors="bg-accent text-white hover:shadow-accent" link="/">
            Home
          </Button>
          <Button
            colors="bg-primary text-black hover:shadow-primary"
            link="/projects"
          >
            Projects
          </Button>
          <Button
            colors="bg-secondary text-black hover:shadow-secondary"
            link="/blogs"
          >
            Blogs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

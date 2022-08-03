import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col md:flex-row lg:w-1/2 md:w-2/3 w-screen h-fit justify-between items-center p-3">
        <img width="200em" src={require("../assets/logo.png")} alt="Personal logo" />
        <div className="flex flex-row pt-3 gap-8">
          <Button color="primary">Projects</Button>
          <Button color="secondary">Posts</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

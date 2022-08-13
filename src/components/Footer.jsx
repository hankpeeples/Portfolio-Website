import React from "react";

const Footer = () => {
  let date = new Date();

  return (
    <div className="flex w-screen justify-center items-center">
      <div className="flex w-screen md:w-2/3 lg:w-1/2 h-fit p-5 pt-10 justify-center items-center gap-8">
        <p className="text-sm text-[#8c8c8c]">
          © {date.getFullYear()} Henry Peeples
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <HashLoader
        className="mt-10 bg-[#0000002e] !p-10 !rotate-0 rounded-md shadow-social shadow-secondary"
        color="#F7DD72"
      />
    </div>
  );
};

export default Loading;

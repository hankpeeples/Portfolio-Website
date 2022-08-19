import React, { useState } from "react";
import { Copy, CheckBoxFill } from "akar-icons";

const Contact = () => {
  const [textCopied, setTextCopied] = useState(false);

  const copyToClipboard = () => {
    setTimeout(() => {
      setTextCopied(false);
    }, 5000);
    navigator.clipboard.writeText("hgpeeples48@gmail.com");
    setTextCopied(true);
  };

  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <div className="flex flex-col md:flex-row pt-10 justify-center items-center">
        Reach out via email:
        <span className="flex p-1.5 px-3 mt-1 md:mt-0 rounded-md justify-center items-center bg-zinc-900 ml-3">
          hgpeeples48@gmail.com
        </span>
        <div
          className="flex flex-row gap-2 p-1.5 m-1.5 rounded-md hover:shadow-social hover:shadow-primary hover:text-primary transition-text ease-in-out duration-300 cursor-pointer"
          onClick={copyToClipboard}
        >
          {textCopied ? (
            <CheckBoxFill
              strokeWidth={2}
              size={20}
              className="text-primary animate-pulse"
            />
          ) : (
            <Copy strokeWidth={2} size={20} className="transition-text" />
          )}
          <p className="text-sm">Copy Email</p>
        </div>
      </div>
      <p className="mt-4">I look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;

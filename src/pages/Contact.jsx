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
      <p className="flex pt-10 justify-center items-center gap-3">
        Reach out via email:
        <span className="flex p-1.5 px-3 rounded-md justify-center items-center gap-3 bg-zinc-900">
          hgpeeples48@gmail.com
          {textCopied ? (
            <div className="flex justify-center items-center gap-1">
              <CheckBoxFill
                strokeWidth={2}
                size={20}
                className="text-primary animate-pulse"
              />
              <p className="text-xs text-primary">Copied!</p>
            </div>
          ) : (
            <div
              className="flex justify-center items-center gap-1 hover:text-primary"
              onClick={copyToClipboard}
            >
              <Copy
                strokeWidth={2}
                size={20}
                className="cursor-pointer transition-text ease-in-out duration-300"
              />
              <p className="text-xs cursor-pointer transition-text ease-in-out duration-300 pr-3.5">
                Copy
              </p>
            </div>
          )}
        </span>
      </p>
      <p className="mt-4">I look forward to hearing from you!</p>
    </div>
  );
};

export default Contact;

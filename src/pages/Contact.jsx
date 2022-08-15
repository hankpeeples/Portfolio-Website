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
    <div className="">
      <p className="flex pt-10 justify-center items-center gap-3">
        Reach out via email:
        <span className="flex p-1.5 px-3 rounded-md justify-center items-center gap-3 bg-zinc-900">
          hgpeeples48@gmail.com
          {textCopied ? (
            <CheckBoxFill
              strokeWidth={2}
              size={20}
              className="text-primary animate-pulse"
            />
          ) : (
            <Copy
              strokeWidth={2}
              size={20}
              className="cursor-pointer hover:text-primary hover:scale-110 transition-scale ease-in-out duration-300"
              onClick={copyToClipboard}
            />
          )}
        </span>
      </p>
    </div>
  );
};

export default Contact;

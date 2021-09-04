import clsx from "clsx";
import React from "react";

const Prompt = ({ className, text, ...props }) => {
  return (
    <div className="prompt">
      <p className={clsx("prompt__text", className)}>{text}</p>
    </div>
  );
};

export default Prompt;

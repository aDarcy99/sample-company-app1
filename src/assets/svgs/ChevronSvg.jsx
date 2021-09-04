import React from "react";

const ChevronSvg = ({className, ...props}) => {
  return (
    <svg
      className={className}
      width="21"
      height="13"
      viewBox="0 0 21 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 11.6689L10.5 2.3351L2 11.6689"
        stroke="black"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronSvg;

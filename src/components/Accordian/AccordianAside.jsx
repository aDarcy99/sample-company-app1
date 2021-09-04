import React from "react";
import Prompt from "../Prompt";

const AccordianAside = ({content,  ...props }) => {
  return (
    <div className="accordian__aside">
      <div className="accordian__aside-content">
        {content}
      </div>
    </div>
  );
};

export default AccordianAside;

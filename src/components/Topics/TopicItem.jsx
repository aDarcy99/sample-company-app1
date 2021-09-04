import React from "react";
//components
import Button from "../common/Button";
import Logo from "../Logo";

const TopicItem = ({isOpen, content, ...props }) => {
  return isOpen ? <div className="topics__content">{content}</div> : "";
};

export default TopicItem;

import React from "react";
import TopicItem from "./TopicItem";

const TopicList = ({ image, activeItem, data, ...props }) => {
  return data.map((item, itemIdx) => (
    <TopicItem
      key={itemIdx}
      isOpen={activeItem === itemIdx ? true : false}
      content={item.content}
    />
  ));
};

export default TopicList;

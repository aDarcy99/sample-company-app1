import React from "react";
//components
import AccordianItem from "./AccordianItem";

const AccordianList = ({
  handleActiveItemChange,
  activeItem,
  contentList,
  ...props
}) => {
  return (
    <div className="accordian__content">
      {contentList.map((item, itemIdx) => (
        <AccordianItem
          key={itemIdx}
          idx={itemIdx}
          name={item.name}
          message={item.message}
          handleActiveItemChange={handleActiveItemChange}
          isOpen={itemIdx === activeItem ? true : false}
        />
      ))}
    </div>
  );
};

export default AccordianList;

import React, { useState } from "react";
import clsx from "clsx";
//assets
import ChevronSvg from "../../assets/svgs/ChevronSvg";
import Button from "../common/Button";

const AccordianItem = ({
  handleActiveItemChange,
  idx,
  isOpen,
  name,
  message,
  ...props
}) => {
  const onAccordianItemClick = (Event) => {
    handleActiveItemChange(idx);
  };

  return (
    <div className="accordian__item">
      <Button className="btn--accordian" onClick={onAccordianItemClick}>
        {name}
        <div className="accordian__item-chevron">
          <ChevronSvg className={clsx(!isOpen && "chevron-flipped")} />
        </div>
      </Button>
      {/*make so display: none when is open is inactive*/}
      {isOpen ? (
        <div className="accordian__item-text text-lg">{message}</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AccordianItem;

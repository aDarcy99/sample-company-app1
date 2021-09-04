import React, { useState } from "react";

const withActiveItem =
  (Component) =>
  ({ defaultActiveItem = 0, ...props }) => {
    const [activeItem, setActiveItem] = useState(defaultActiveItem);

    const handleActiveItemChange = (item) => {
      //Reset activeItem if current activeItem is clicked
      if (item === activeItem) {
        setActiveItem(defaultActiveItem);
      } else {
        setActiveItem(item);
      }
    };

    return (
      <Component
        {...props}
        activeItem={activeItem}
        handleActiveItemChange={handleActiveItemChange}
      />
    );
  };

export default withActiveItem;

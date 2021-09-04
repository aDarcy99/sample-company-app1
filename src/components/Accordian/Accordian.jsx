import React, { useState } from "react";
//components
import Prompt from "../Prompt";
import AccordianAside from "./AccordianAside";
import AccordianList from "./AccordianList";
import Button from "../common/Button";

const Accordian = ({ activeItem, handleActiveItemChange, ...props }) => {
  const accordianContent = [
    {
      name: "Lorem Ipsum",
      message:
        "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
    },
    {
      name: "Lorem Ipsum",
      message:
        "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
    },
    {
      name: "Lorem Ipsum",
      message:
        "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
    },
    {
      name: "Lorem Ipsum",
      message:
        "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
    },
    {
      name: "Lorem Ipsum",
      message:
        "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
    },
    {
      name: "Lorem Ipsum",
      message:
        "Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut. ",
    },
  ];
  const asideContent = (
    <React.Fragment>
      <h1 className="h1-lg text-white gutter-bottom-lg">Nulla Imperdiet</h1>
      <p className="text-white text-lg gutter-bottom-sm">
        Vestibulum dapibus hendrerit nibh ut ornare.
      </p>
      <Prompt
        className="text-white"
        text="Sed porta, lorem a sodales rhoncus, neque ligula dictum libero, sit amet."
      />
    </React.Fragment>
  );

  const onBackItemClick = () => {
    if (activeItem !== 0 && activeItem !== null) {
      handleActiveItemChange(activeItem - 1);
    }
  };
  const onNextItemClick = () => {
    if (activeItem !== accordianContent.length - 1) {
      handleActiveItemChange(activeItem + 1);
    }
  };

  return (
    <section className="accordian">
      <AccordianAside content={asideContent} />
      <AccordianList
        activeItem={activeItem}
        handleActiveItemChange={handleActiveItemChange}
        contentList={accordianContent}
      />
      <div className="accordian__incrementor">
        <Button
          disabled={!activeItem}
          className="btn--accordian-incrementor"
          onClick={onBackItemClick}
        >
          Back
        </Button>
        <Button
          disabled={activeItem == accordianContent.length - 1}
          className="btn--accordian-incrementor"
          onClick={onNextItemClick}
        >
          Next
        </Button>
      </div>
    </section>
  );
};

export default Accordian;

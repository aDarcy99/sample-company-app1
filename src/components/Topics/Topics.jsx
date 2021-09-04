import React, { useState } from "react";
//components
import Logo from "../Logo";
import Button from "../common/Button";
import TopicList from "./TopicList";
import clsx from "clsx";
import HouseSvg from "../../assets/HouseSvg";

const Topics = ({ activeItem, handleActiveItemChange, ...props }) => {
  const topicsContent = [
    {
      name: (
        <React.Fragment>
          <HouseSvg /> Home
        </React.Fragment>
      ),
      content: (
        <React.Fragment>
          <Logo className="logo--topics-home" />
          <h1 className="topics__title h1-lg uppercase text-white">
            lOREM iPSUM DOLOR SIT{" "}
          </h1>
          <Button
            onClick={() => {
              handleActiveItemChange(1);
            }}
          >
            Begin
          </Button>
        </React.Fragment>
      ),
      imgSrc: "https://i.imgur.com/QluPLG2.jpg",
    },
    {
      name: "Topic 2",
      content: (
        <React.Fragment>
          <Logo size="large" className="logo--topics-home" />
          <p className="text-white gutter-bottom">lOREM iPSUM</p>
          <p className="text-white gutter-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            vitae nisl elit.
          </p>
          <p className="text-white gutter-bottom">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eu leo elit. Donec condimentum odio ut ante bibendum, quis egestas
            quam semper.
          </p>
          <p className="text-white gutter-bottom">
            Donec tempus cursus magna a feugiat. Morbi scelerisque euismod
            aliquet. Integer ut euismod risus. Aenean a diam vel nisl accumsan
            cursus.
          </p>
          <p className="text-white gutter-bottom">
            Quisque ac dapibus nisl. Etiam rhoncus aliquet ligula ac convallis.
            Ut eleifend sit amet justo eu laoreet.`
          </p>
        </React.Fragment>
      ),
      imgSrc: "https://i.imgur.com/N7HtoUV.jpg",
    },
    {
      name: "Topic 3",
      content: "",
      imgSrc: "",
    },
    {
      name: "Topic 4",
      content: "",
      imgSrc: "",
    },
    {
      name: "Topic 5",
      content: "",
      imgSrc: "",
    },
  ];
  return (
    <section className="topics">
      <div className="topics__top">
        <div className="topics__top-left">
          <TopicList activeItem={activeItem} data={topicsContent} />
        </div>
        <div className="topics__top-right">
          {topicsContent.map((item, itemIdx) =>
            itemIdx === activeItem ? (
              <img src={item.imgSrc} className="topics__display-image" />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="topics__bottom">
        <nav className="topics__nav">
          {topicsContent.map((item, itemIdx) => (
            <Button
              key={itemIdx}
              onClick={() => {
                handleActiveItemChange(itemIdx);
              }}
              className={clsx(
                "btn--topic-item text-white",
                itemIdx === activeItem && "active"
              )}
            >
              {item.name}
            </Button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Topics;

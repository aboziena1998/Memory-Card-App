import React, { useContext, useEffect, useState } from "react";
import ArrowBtn from "./ArrowBtn";
import FlashCard from "./FlashCard";

const CardSlider = ({ content, deleteCard, slide }) => {
  let currentIdx = content.findIndex((c) => c.state === "current");
  let cardsSize = content.length;
  const cards = content
    ? content.map((item, idx) => {
        if (item.state === "") {
          if (idx === 0) item.state = "current";
          else item.state = "next";
        }
        return (
          <FlashCard
            question={item.question}
            awnser={item.awnser}
            key={idx}
            className={`card ${item.state}`}
            id={item.id}
            onDelete={deleteCard}
          />
        );
      })
    : "";

  return (
    <div className="card-slider">
      <h1>Memory Card</h1>
      <div
        className="cards-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transformStyle: "preserve-3d",
        }}
      >
        {cards}
      </div>

      <div className="arrow-btns">
        <ArrowBtn direction="previous" onClick={slide} />
        <p>{`${content.length > 0 ? currentIdx + 1 : 0} / ${cardsSize}`}</p>
        <ArrowBtn direction="next" onClick={slide} />
      </div>
    </div>
  );
};

export default CardSlider;

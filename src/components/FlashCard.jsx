import React from "react";

const FlashCard = ({ question, awnser, className, onDelete, id }) => {
  const flip = (e) => {
    const cardsContainer = e.target.closest(".card-slider .cards-container");
    cardsContainer.classList.toggle("flip");
  };
  return (
    <div className={className} onClick={(e) => flip(e)}>
      <div className="card-face">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          className={"delete-btn"}
        >
          &#x2715;
        </button>
        <span className="instructions">Click me</span>
        {question}
      </div>
      <div className="card-back">{awnser}</div>
    </div>
  );
};

export default FlashCard;

import React, { useState, useEffect } from "react";
import "./Cards.css";

type CardsFlippedState = {
  cardId: string;
  name: string;
};

function Cards() {
  const [lastClicked, setLastClicked] = useState<CardsFlippedState>();
  const [cards, setCards] = useState([]);

  useEffect(() => {});

  const cardsDivs = document.querySelectorAll(".memory-card");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.dataset);
    event.currentTarget.classList.add("flip");
    console.log(lastClicked);
    if (!lastClicked) {
      setLastClicked({
        cardId: event.currentTarget.dataset.id || "",
        name: event.currentTarget.dataset.name || "",
      });
    } else {
      if (lastClicked.name !== event.currentTarget.dataset.name) {
        setLastClicked(undefined);
        setTimeout(() => {
          cardsDivs.forEach((card) => {
            card.classList.remove("flip");
          });
        }, 1000);

        console.log(cardsDivs);
      }
    }
  };

  return (
    <div className="card-container">
      <div
        className="memory-card"
        data-name="daniel"
        data-id="1"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/daniel.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="daniel"
        data-id="2"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/daniel.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="david"
        data-id="3"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/david.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="david"
        data-id="4"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/david.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="edgar"
        data-id="5"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/edgar.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="edgar"
        data-id="6"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/edgar.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="ian"
        data-id="7"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ian.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="ian"
        data-id="8"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ian.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="linnea"
        data-id="9"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/linnea.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="linnea"
        data-id="10"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/linnea.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="ray"
        data-id="11"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ray.jpg")}
          alt="Card Front"
        />
      </div>
      <div
        className="memory-card"
        data-name="ray"
        data-id="12"
        onClick={handleClick}
      >
        <img
          className="back"
          src={require("../../images/joel.jpg")}
          alt="Card Back"
        />
        <img
          className="front"
          src={require("../../images/ray.jpg")}
          alt="Card Front"
        />
      </div>
    </div>
  );
}

export default Cards;

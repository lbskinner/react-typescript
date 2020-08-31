import React, { useState, useEffect } from "react";
import "./Cards.css";

type CardsFlippedState = {
  cardId: string;
  name: string;
};

function Cards() {
  const [lastClicked, setLastClicked] = useState<CardsFlippedState>();
  const [gameOver, setGameOver] = useState(false);
  const [cardsMatched, setCardsMatched] = useState<string[]>([]);

  const cardsDivs = document.querySelectorAll(".memory-card");

  useEffect(() => {
    handleGameOver();
  });

  const handleGameOver = () => {
    if (cardsMatched.length === 12) {
      setGameOver(true);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentClicked = event.currentTarget;
    currentClicked.classList.add("flip");
    if (!lastClicked) {
      setLastClicked({
        cardId: currentClicked.dataset.id || "",
        name: currentClicked.dataset.name || "",
      });
    } else {
      setLastClicked(undefined);
      if (lastClicked.name === currentClicked.dataset.name) {
        setTimeout(() => {
          cardsDivs.forEach((card) => {
            if (
              card.getAttribute("data-name") === currentClicked.dataset.name
            ) {
              card.classList.add("image-opacity");
              card.classList.remove("flip");
              setCardsMatched((prevState) => [
                ...prevState,
                currentClicked.dataset.name || "",
              ]);
            }
          });
        }, 1000);
      } else {
        setTimeout(() => {
          cardsDivs.forEach((card) => {
            card.classList.remove("flip");
          });
        }, 1000);
      }
    }
  };

  const handleStartGame = () => {
    setCardsMatched([]);
    setGameOver(false);
    cardsDivs.forEach((card) => {
      card.classList.remove("flip", "image-opacity");
    });
  };
  return (
    <>
      {gameOver === true && (
        <>
          <h2>Game Over!!!</h2>
          <button onClick={handleStartGame}>Start Game</button>
        </>
      )}
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
    </>
  );
}

export default Cards;

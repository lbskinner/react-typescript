import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";

type CardsFlippedState = {
  name: string;
};

const images = [
  "daniel",
  "david",
  "edgar",
  "ian",
  "linnea",
  "ray",
  "daniel",
  "david",
  "edgar",
  "ian",
  "linnea",
  "ray",
];

function Cards() {
  const [lastClicked, setLastClicked] = useState<CardsFlippedState>();
  const [gameOver, setGameOver] = useState(false);
  const [cardsMatched, setCardsMatched] = useState<string[]>([]);

  const cardsDivs = document.querySelectorAll(".memory-card");

  useEffect(() => {
    shuffleCards(images);
  }, []);

  useEffect(() => {
    handleGameOver();
  });

  const shuffleCards = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // using destructurig to swap array[i] and array [j]
      // same as temp = array[i] array[i] = array[j] array[j] = temp
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(images);
  };

  const handleGameOver = () => {
    if (cardsMatched.length === 12) {
      setGameOver(true);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentClicked = event.currentTarget;
    console.log(currentClicked);

    currentClicked.classList.add("flip");
    if (!lastClicked) {
      setLastClicked({
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
    shuffleCards(images);
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
        {images.map((image, index) => {
          return <Card key={index} name={image} handleClick={handleClick} />;
        })}
      </div>
    </>
  );
}

export default Cards;

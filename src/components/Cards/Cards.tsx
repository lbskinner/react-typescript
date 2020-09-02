import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import Images from "../../ImagesArray";

type CardsFlippedState = {
  name: string;
};

function Cards() {
  const [lastClicked, setLastClicked] = useState<HTMLElement>();
  const [gameOver, setGameOver] = useState(false);
  const [cardsMatched, setCardsMatched] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(0);
  //   const [cardsFlipped, setCardsFlipped] = useState<HTMLElement>();

  const cardsDivs = document.querySelectorAll(".memory-card");

  useEffect(() => {
    shuffleCards(Images);
    // startTimer();
  }, []);

  useEffect(() => {
    handleGameOver();
  });

  const startTimer = () => {
    setInterval(() => {
      console.log(timer);
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => clearInterval();
  };

  const shuffleCards = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // using destructurig to swap array[i] and array [j]
      // same as temp = array[i] array[i] = array[j] array[j] = temp
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
  };

  const handleGameOver = () => {
    if (cardsMatched.length === 12) {
      setGameOver(true);
      //   setTimer(0);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentClicked: HTMLElement = event.currentTarget;
    console.log(currentClicked);

    currentClicked.classList.add("flip");
    if (!lastClicked) {
      setLastClicked(currentClicked);
    } else {
      setLastClicked(undefined);
      if (
        lastClicked.getAttribute("data-name") === currentClicked.dataset.name
      ) {
        setTimeout(() => {
          lastClicked.classList.add("image-opacity");
          currentClicked.classList.add("image-opacity");
          lastClicked.classList.remove("flip");
          currentClicked.classList.remove("flip");
        }, 500);
        setCardsMatched((prevState) => [
          ...prevState,
          currentClicked.dataset.name || "",
        ]);
      } else {
        setTimeout(() => {
          lastClicked.classList.remove("flip");
          currentClicked.classList.remove("flip");
        }, 500);
      }
    }
  };

  const handleStartGame = () => {
    shuffleCards(Images);
    setCardsMatched([]);
    setGameOver(false);
    cardsDivs.forEach((card) => {
      card.classList.remove("flip", "image-opacity");
    });
    // startTimer();
  };

  return (
    <>
      {gameOver === true && (
        <>
          <h2>Game Over!!!</h2>
          <button onClick={handleStartGame}>Start Game</button>
        </>
      )}
      <p>Timer: {timer}</p>
      <div className="card-container">
        {Images.map((image, index) => {
          return <Card key={index} name={image} handleClick={handleClick} />;
        })}
      </div>
    </>
  );
}

export default Cards;

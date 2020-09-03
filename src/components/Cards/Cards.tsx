import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import Images from "../../ImagesArray";
import Timer from "../Timer/Timer";

function Cards() {
  const [lastClicked, setLastClicked] = useState<HTMLElement>();
  const [gameOver, setGameOver] = useState(false);
  const [cardsMatched, setCardsMatched] = useState<string[]>([]);
  const [seconds, setSeconds] = useState<number>(0);
  const [gameTime, setGameTime] = useState<number>(0);

  const cardsDivs = document.querySelectorAll(".memory-card");

  useEffect(() => {
    shuffleCards(Images);
  }, []);

  useEffect(() => {
    if (cardsMatched.length === 6) {
      handleGameOver();
    }
  });

  const shuffleCards = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // using destructurig to swap array[i] and array [j]
      // same as temp = array[i] array[i] = array[j] array[j] = temp
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
    console.log({ gameTime });
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentClicked: HTMLElement = event.currentTarget;
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
        }, 800);
      }
    }
  };

  const resetGame = () => {
    shuffleCards(Images);
    setCardsMatched([]);
    setGameOver(false);
    setSeconds(0);
    cardsDivs.forEach((card) => {
      card.classList.remove("flip", "image-opacity");
    });
  };

  const handleStartGame = () => {
    gameOver && resetGame();
    if (!gameOver) {
      if (window.confirm("Are you sure you want to start a new game?")) {
        resetGame();
      }
    }
  };

  return (
    <>
      {gameOver === true ? (
        <>
          <h2>Game Over!!!</h2>
          <h3>
            Time Played:{" "}
            {Math.floor(gameTime / 60) < 10
              ? `0${Math.floor(gameTime / 60)}`
              : Math.floor(gameTime / 60)}{" "}
            : {gameTime % 60 < 10 ? `0${gameTime % 60}` : gameTime % 60}
          </h3>
        </>
      ) : (
        <Timer
          gameOver={gameOver}
          seconds={seconds}
          setGameTime={setGameTime}
          setSeconds={setSeconds}
        />
      )}
      <button onClick={handleStartGame}>Start New Game</button>

      <div className="card-container">
        {Images.map((image, index) => {
          return <Card key={index} name={image} handleClick={handleClick} />;
        })}
      </div>
    </>
  );
}

export default Cards;

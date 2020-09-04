import React, { useState, useEffect } from "react";
import "./Cards.css";
import Card from "../Card/Card";
import Images from "../../ImagesArray";
import Timer from "../Timer/Timer";

const lastThreeGames: number[] = [];
let count: number = 0;

function Cards() {
  const [lastClicked, setLastClicked] = useState<HTMLElement>();
  const [gameOver, setGameOver] = useState(false);
  const [cardsMatched, setCardsMatched] = useState<string[]>([]);
  const [seconds, setSeconds] = useState<number>(0);
  const [gameTime, setGameTime] = useState<number>(0);
  const [priorPlayedTime, setPriorPlayedTime] = useState<number[]>([]);

  const cardsDivs = document.querySelectorAll(".memory-card");

  useEffect(() => {
    shuffleCards(Images);
  }, []);

  // useEffect(() => {
  //   if (cardsMatched.length === 6) {
  //     handleGameOver();
  //   }
  // });

  const shuffleCards = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // using destructurig to swap array[i] and array [j]
      // same as temp = array[i] array[i] = array[j] array[j] = temp
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const handleLocalStorage = () => {
    const priorGameTimes: number[] = JSON.parse(
      localStorage.getItem("lastThreeGames") || ""
    );
    console.log(priorGameTimes);
    setPriorPlayedTime([...priorGameTimes]);

    priorGameTimes.push(gameTime);

    if (priorGameTimes.length > 3) {
      priorGameTimes.shift();
    }

    localStorage.setItem("lastThreeGames", JSON.stringify(priorGameTimes));
  };

  const handleGameOver = () => {
    setGameOver(true);
    handleLocalStorage();
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
        // setCardsMatched((prevState) => [
        //   ...prevState,
        //   currentClicked.dataset.name || "",
        // ]);
        count++;
        if (count === 6) handleGameOver();
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
    count = 0;
    // setCardsMatched([]);
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
          <h3>Last Three Games:</h3>
          {priorPlayedTime.map((time, index) => {
            return (
              <h4 key={index}>
                {Math.floor(time / 60) < 10
                  ? `0${Math.floor(time / 60)}`
                  : Math.floor(time / 60)}{" "}
                : {time % 60 < 10 ? `0${time % 60}` : time % 60}
              </h4>
            );
          })}
          <h3>
            Current Time Played:{" "}
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

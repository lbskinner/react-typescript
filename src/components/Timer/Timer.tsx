import React, { useState, useEffect } from "react";

interface timerProps {
  gameOver: boolean;
  setGameTime: (prevState: number) => void;
}

const Timer: React.FC<timerProps> = ({ gameOver, setGameTime }) => {
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let timer: any = null;
    if (!gameOver) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
      setGameTime(seconds);
    } else if (gameOver && seconds !== 0) {
      clearInterval(timer);
      setSeconds(0);
    }
    return () => clearInterval(timer);
  }, [gameOver, seconds, setGameTime]);

  return (
    <p>
      Timer:{" "}
      {Math.floor(seconds / 60) < 10
        ? `0${Math.floor(seconds / 60)}`
        : Math.floor(seconds / 60)}
      :{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
    </p>
  );
};

export default Timer;

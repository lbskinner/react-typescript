import React, { useState, useEffect, SetStateAction } from "react";

interface timerProps {
  isRunning: boolean;
  setGameTime: (prevState: number) => void;
}

const Timer: React.FC<timerProps> = ({ isRunning, setGameTime }) => {
  const [seconds, setSeconds] = useState<number>(0);
  //   const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let timer: any = null;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        setGameTime(seconds);
      }, 1000);
    } else if (!isRunning && seconds !== 0) {
      clearInterval(timer);

      setSeconds(0);
    }
    return () => clearInterval(timer);
  }, [isRunning, seconds]);

  //   const startTimer = () => {
  //     setIsRunning(true);
  //   };

  //   const resetTimer = () => {
  //     setSeconds(0);
  //     setIsRunning(false);
  //   };

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

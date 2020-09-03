import React, { useEffect } from "react";

interface timerProps {
  gameOver: boolean;
  seconds: number;
  setGameTime: (prevState: number) => void;
  setSeconds: (prevState: number) => void;
}

const Timer: React.FC<timerProps> = ({
  gameOver,
  seconds,
  setSeconds,
  setGameTime,
}) => {
  // const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    let timer: any = null;
    if (!gameOver) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
      }, 1000);
      setGameTime(seconds);
    } else if (gameOver && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [gameOver, seconds, setGameTime, setSeconds]);

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

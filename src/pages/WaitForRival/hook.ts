import { useEffect, useState } from "react";
import { useGame } from "../../providers/game";

export function useWaitForRival() {
  const { gameCode, waitTimeOut } = useGame();
  const [timeLeft, setTimeLeft] = useState(60);
  const waitingBarWidth = (timeLeft * 10) / 6;
  const copyCode = () => navigator.clipboard.writeText(gameCode as string);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      waitTimeOut();
    }
  }, [timeLeft, waitTimeOut]);

  return { timeLeft, waitingBarWidth, copyCode };
}

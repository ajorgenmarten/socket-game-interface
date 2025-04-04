import { useEffect, useState } from "react";
import { useGame } from "../../providers/game";

export function useWaitForRival() {
  const { currentGameState } = useGame();
  const [timeLeft, setTimeLeft] = useState(60);
  const waitingBarWidth = (timeLeft * 10) / 6;
  const copyCode = () =>
    navigator.clipboard.writeText(currentGameState.code as string);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else setTimeLeft(0);
  }, [timeLeft]);

  return { timeLeft, waitingBarWidth, copyCode };
}

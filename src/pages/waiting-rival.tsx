import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Copy } from "../icons/copy";
import { useGame } from "../providers/game";

export function WaitingRival() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-950 to-gray-900">
      <div className="flex items-center justify-center h-full">
        <div className="flex-1 container mx-auto py-12 px-4 flex items-center justify-center relative z-10">
          <WaitingCard />
        </div>
      </div>
    </div>
  );
}

function WaitingCard() {
  const { currentGameCode, waitTimeOut } = useGame();
  const [timeLeft, setTimeLeft] = useState(40);
  const [animationFrame, setAnimationFrame] = useState(0);
  const copyGameCode = () => {
    navigator.clipboard.writeText(currentGameCode as string);
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) {
      waitTimeOut();
    }
  }, [timeLeft]);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  const progressPercentage = (timeLeft / 40) * 100;
  return (
    <div className="border border-purple-700/50 bg-gray-900/60 backdrop-blur-sm max-w-md w-full mx-auto overflow-hidden rounded-lg p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-2 text-center text-gradient">
        Esperando a tu contrario
      </h1>
      <p className="text-purple-300/80 mb-6 text-center">
        Enviale este código a tu amig@ para que le partas la cara 😆
      </p>

      <div className="bg-gray-800/80 p-6 rounded-lg border border-purple-700/50 mb-4">
        <div className="text-sm text-purple-300 mb-1 text-center">
          Game Code
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="text-4xl uppercase font-mono font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            {currentGameCode}
          </div>
          <Button
            className="rounded-full text-purple-400 hover:text-white hover:bg-purple-900/50"
            onClick={copyGameCode}
          >
            <Copy className="size-4" />
          </Button>
        </div>
      </div>

      <div className="w-full mb-8">
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-purple-300">Starting in</div>
          <div className="text-sm font-medium text-gray-200/80">
            {timeLeft} seconds
          </div>
        </div>
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
            style={{
              width: `${progressPercentage}%`,
              transition: "width 1s linear",
            }}
          />
        </div>

        {/* Waiting animation */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-3 w-3 rounded-full bg-purple-500"
              style={{
                opacity: 0.3 + Math.sin((animationFrame + i * 30) * 0.1) * 0.7,
                transform: `scale(${
                  0.8 + Math.sin((animationFrame + i * 30) * 0.1) * 0.2
                })`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

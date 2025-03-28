import { GameProvider } from "./providers/game";
import { SocketProvider } from "./providers/socket";
import { RouterApp } from "./router";

function App() {
  return (
    <SocketProvider>
      <GameProvider>
        <RouterApp />
      </GameProvider>
    </SocketProvider>
  );
}

export default App;

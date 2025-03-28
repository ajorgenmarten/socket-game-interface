/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, FC, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

function useSocketHook() {
  const [socket] = useState(
    io("ws://localhost:3000", {
      autoConnect: false,
      withCredentials: true,
      transports: ["websocket"],
    })
  );

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("Connected to socket.io server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket.io server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return { socket };
}

const SocketContext = createContext<ReturnType<typeof useSocketHook>>({
  socket: io(),
});

export function useSocket() {
  return useContext(SocketContext);
}

export const SocketProvider: FC<SocketProviderProps> = (props) => {
  return (
    <SocketContext.Provider value={useSocketHook()}>
      {props.children}
    </SocketContext.Provider>
  );
};

interface SocketProviderProps {
  children?: React.ReactNode;
}

export interface ErrorData {
  message: string;
  data?: any;
  in: string;
}

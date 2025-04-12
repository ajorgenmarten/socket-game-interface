import { io } from "socket.io-client";
import { env } from "./config";

export const socket = io(env.VITE_BACKEND_URL);
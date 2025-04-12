import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { RouterApp } from "./router.tsx";

createRoot(document.getElementById("root")!).render(<RouterApp />);

import { createRoot } from "react-dom/client";
import "./assets/index.css";
// import App from "./App.tsx";
import { TestSocketComponent } from "./Test.tsx";

createRoot(document.getElementById("root")!).render(<TestSocketComponent />);

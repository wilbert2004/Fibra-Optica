import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//importamos el css global para toda la app
import "./assets/styles/global.css";
//importamos el css de typografia
import "./assets/styles/typography.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

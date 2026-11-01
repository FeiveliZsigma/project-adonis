import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/project-adonis/sw.js", { scope: "/project-adonis/" })
      .catch(error => console.error("ADONIS offline setup failed:", error));
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode><App /></React.StrictMode>
);

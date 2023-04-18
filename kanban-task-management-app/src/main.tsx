import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./css/main.css";
import DataContext from "./context/DataContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DataContext>
      <App />
    </DataContext>
  </React.StrictMode>
);

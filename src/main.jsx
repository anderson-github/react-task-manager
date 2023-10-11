import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tasks from "./components/Tasks";
import Board from "./components/Board";
import Summary from "./components/Summary";
import { GlobalDataProvider } from "./context/data-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalDataProvider>
        <Tasks />
        <Board />
        <Summary />
    </GlobalDataProvider>
  </React.StrictMode>
);

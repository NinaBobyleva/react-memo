import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LivesProvider } from "./context/livesContext";
import { EasyModeProvider } from "./context/easymodeContext";
import { LeadersProvider } from "./context/leaderboardContext";
import { CardsProvider } from "./context/cardsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CardsProvider>
      <LeadersProvider>
        <EasyModeProvider>
          <LivesProvider>
            <RouterProvider router={router}></RouterProvider>
          </LivesProvider>
        </EasyModeProvider>
      </LeadersProvider>
    </CardsProvider>
  </React.StrictMode>,
);

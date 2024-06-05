import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LivesProvider } from "./context/livesContext";
import { EasyModeProvider } from "./context/easymodeContext";
import { LeadersProvider } from "./context/leaderboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LeadersProvider>
      <EasyModeProvider>
        <LivesProvider>
          <RouterProvider router={router}></RouterProvider>
        </LivesProvider>
      </EasyModeProvider>
    </LeadersProvider>
  </React.StrictMode>,
);

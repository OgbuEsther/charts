import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { ShareState } from "./Global/shareState";
import Graph from "./components/graph/Graph";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShareState>
      <Graph />
      {/* <RouterProvider router={mainRouter} /> */}
    </ShareState>

    {/* <App /> */}
  </React.StrictMode>,
);

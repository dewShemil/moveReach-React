import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TrendingProvider } from "./Context/TrendingContext";
import { MovieProvider } from "./Context/MovieContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <TrendingProvider>
        <App />
      </TrendingProvider>
    </MovieProvider>
  </React.StrictMode>
);

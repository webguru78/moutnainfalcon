import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Lenis from "@studio-freight/lenis";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => t,
  smooth: true,
  direction: "vertical",
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

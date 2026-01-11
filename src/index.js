import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "aos/dist/aos.css";

import AOS from "aos";
import "./index.css";

AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
  offset: 80,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

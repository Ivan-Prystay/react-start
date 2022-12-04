import App from "./App";
import { createRoot } from "react-dom/client";
import React from "react";

const div = document.querySelector("#root");
const root = createRoot(div);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

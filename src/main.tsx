import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, Router } from "react-router";
import { Routes } from "react-router";
import Login from "./login/page.tsx";
import { Home } from "./home/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

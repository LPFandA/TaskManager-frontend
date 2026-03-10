import React from "react";
import ReactDOM from "react-dom/client";
import TestPage from "./pages/TestPage";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TestPage />
    </ThemeProvider>
  </React.StrictMode>
);
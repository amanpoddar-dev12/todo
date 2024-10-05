import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TaskContextProvider from "./context/taskContextProvider.jsx";
// import { ThemeProvider } from "./context/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </StrictMode>
);

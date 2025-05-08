import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Demo from "./component/Demo.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <App />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Demo />
      </div>
    </div>
  </React.StrictMode>
);

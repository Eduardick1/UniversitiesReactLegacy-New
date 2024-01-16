import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import MasterContextProvider from "./utils/context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MasterContextProvider>
      <App />
    </MasterContextProvider>
  </React.StrictMode>
);

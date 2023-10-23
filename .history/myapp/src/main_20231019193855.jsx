import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter } from "react-router-dom";

const activeChainId = ChainId.Mumbai;
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThirdwebProvider desiredChainId = {activeChainId} clientId="d1388ac43245027d5ca9f263af212719">
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);

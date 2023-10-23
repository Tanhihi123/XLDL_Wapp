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
      <ThirdwebProvider desiredChainId = {activeChainId} clientId="YOUR_CLIENT_ID">
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);

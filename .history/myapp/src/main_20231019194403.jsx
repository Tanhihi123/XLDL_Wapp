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
      <ThirdwebProvider desiredChainId = {activeChainId} clientId="sJFhBg5mS0Hb9qZkBCNHep80WkEPfnMNtV3BQHchn89b9LiE_PyRYgotr85sbwuFk7KdkY2VYpPOmtNbH3ZpSg">
        <App />
      </ThirdwebProvider>
    </BrowserRouter>
  </React.StrictMode>
);

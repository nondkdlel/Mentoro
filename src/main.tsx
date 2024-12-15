import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes";

import { GlobalStyle } from "@style/globalStyle";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <Router />
  </StrictMode>
);

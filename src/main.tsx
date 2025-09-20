import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ModalFormPage from "./(route)/form/ModalFormPage";
import { OverlayProvider } from "@toss/use-overlay";

import "./globalStyle.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <OverlayProvider>
      <ModalFormPage />
    </OverlayProvider>
  </StrictMode>,
);

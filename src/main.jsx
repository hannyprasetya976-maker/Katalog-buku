import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import { BorrowProvider } from "./context/BorrowContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <BookProvider>
        <BorrowProvider>
          <App />
        </BorrowProvider>
      </BookProvider>
    </BrowserRouter>
  </StrictMode>
);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ContactProvider } from "./contexts/contactContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContactProvider>
        <App />
      </ContactProvider>
    </Provider>
  </StrictMode>
);

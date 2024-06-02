import App from "./App";
import ReactDOM from "react-dom/client";

import { store } from "store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ModalCartProvider } from "contexts/modalCartWindow/ModalCartContext";

import "./index.scss";
import "normalize.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ModalCartProvider>
        <App />
      </ModalCartProvider>
    </Provider>
  </BrowserRouter>
);

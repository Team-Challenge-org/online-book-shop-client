import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "store/store";
import { BrowserRouter } from "react-router-dom";
import { ModalCartProvider } from "contexts/modalCartWindow/ModalCartContext";

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

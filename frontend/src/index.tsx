// modules
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
// children
import App from "./App";
// styles
import "antd/dist/antd.css";
import "./index.scss";
// redux store
import { store } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

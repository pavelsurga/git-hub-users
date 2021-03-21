import React from "react";
import ReactDOM from "react-dom";
import "./shared/style/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoutes } from "./createRoutes";
import { configureStore } from "./configureStore";
import createApi from "./api";
import { modules } from "./modules";

const children = createRoutes(modules);

const api = createApi("https://api.github.com");

const store = configureStore({ api });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App>{children}</App>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

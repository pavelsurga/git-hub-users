import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { createRoutes } from "./createRoutes";
import { configureStore } from "./configureStore";
import createApi from "./api";
import { modules } from "./modules";
import { GlobalStyle } from './shared/style/index.style';

const children = createRoutes(modules);

const api = createApi("https://api.github.com");

const store = configureStore({ api });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <GlobalStyle/>
        {children}
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

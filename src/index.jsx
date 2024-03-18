import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from './redux/store';
import "./assets/styles.css";
import "./assets/icons/remixicon.css";
import "./assets/less/yoda-theme.less";

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
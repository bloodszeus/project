import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { App } from "App";
import { store } from "store/store";
import { Provider } from "react-redux";
import { GlobalChecks } from "GlobalChecks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <GlobalChecks>
        <App />
      </GlobalChecks>
    </Provider>
  </Router>
);

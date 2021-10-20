import React from "react";
import "./index.css";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { SnackbarProvider } from "notistack";
import * as serviceWorker from "./serviceWorker";
import { LocalizeProvider } from "react-localize-redux";
import { CookiesProvider } from "react-cookie";
import  {store}  from "./store";

render(
  <CookiesProvider>
    <Provider store={store}>
      <LocalizeProvider store={store}>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </LocalizeProvider>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
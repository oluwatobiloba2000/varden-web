import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import { store, persistor } from "./store";
import * as serviceWorker from "./serviceWorker";

import CountryProvider from "./utils/countryProvider";
import CategoryProvider from "./utils/categoryProvider";
import { ChakraProvider, theme } from "@chakra-ui/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CountryProvider>
        <CategoryProvider>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </CategoryProvider>
      </CountryProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

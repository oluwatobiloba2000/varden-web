import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import promise from "redux-promise-middleware";

import reducers from "../reducers";

const persistConfig = {
  key: "root",
  storage
  
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middleWare = [thunk, promise()];

let composeEnhancers = compose;
if (!process.env.NODE_ENV === 'prod' || !process.env.NODE_ENV === 'production') {
  composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)|| compose;
}

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);

export let persistor = persistStore(store);

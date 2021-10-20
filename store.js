import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import reduxMiddleware from "react-block-ui/lib/reduxMiddleware";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "authType",
  storage: storage,
  whitelist: ["loadUserRdc"], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  composeEnhancers(applyMiddleware(thunk, reduxMiddleware))
);

const persistor = persistStore(store);

export { persistor, store };
// redux file
import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";

// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// logger
import logger from 'redux-logger';

// redux-saga
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./root-saga";

// import root
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleWare = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

// root-reducer
const middleWares = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleWare ].filter(Boolean);

// redux-devtools
const composeEnhancer = 
  (process.env.NODE_ENV !== 'production' &&
    window && window.__RDEUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export value
export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnhancers
);

sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
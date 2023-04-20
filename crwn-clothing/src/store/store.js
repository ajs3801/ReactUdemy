// redux file
import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";

// redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// logger
import logger from 'redux-logger';

// import root
import { rootReducer } from "./root-reducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState', store.getState());

  next(action);
  console.log('next state: ', store.getState());
};

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root-reducer
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// export value
export const store = createStore(
  persistedReducer, 
  undefined, 
  composedEnhancers
);

export const persistor = persistStore(store);
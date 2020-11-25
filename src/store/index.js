import { createStore } from "redux";

import rootReducer from "./reducers";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("userShop");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("userShop", serializedState);
  } catch (e) {
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
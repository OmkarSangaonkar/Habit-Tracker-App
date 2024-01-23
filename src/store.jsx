// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const persistentState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : {};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistentState,
  /* Add middleware or other configurations if needed */
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
});

export default store;

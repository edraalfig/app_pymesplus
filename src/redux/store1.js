import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import usuarioReducer from "./userDucks";
import fileReducer from "./fileDucks";

const rootReducer = combineReducers({
  usuario: usuarioReducer,
  archivo: fileReducer,
});

export default function generateStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
  return store;
}

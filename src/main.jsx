import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Particle from "./components/Particle";
import "./index.css";
import generateStore from "./redux/store1";

const myStore = generateStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Particle />
    <React.StrictMode>
      <Provider store={myStore}>
        <App />
      </Provider>
    </React.StrictMode>
  </>
);

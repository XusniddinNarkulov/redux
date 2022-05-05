import React from "react";
import ReactDOM from "react-dom";
// import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";

import App from "./components/App";
import reducer from "./reducers/reducers";

const store = createStore(reducer);
// console.log(store.getState());

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.querySelector("#root")
);
// reportWebVitals();

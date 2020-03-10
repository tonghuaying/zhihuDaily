import React from "react";
import ReactDOM from "react-dom";
import Header from "./pages/header";
import Banner from "./pages/banner";
import List from "./pages/list";
import { Provider } from "react-redux";
import store from './store';
import "./index.css";
const App = (
  <Provider store={store}>
      <div className="header-container">
        <Header></Header>
      </div>
      <div className="main-body">
        <Banner></Banner>
        <List></List>
      </div>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));

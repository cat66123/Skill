import * as React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Header from "./common/header/Header";

import { GlobalStyleInit } from "./style";
import { GlobalStyleFont } from "./statics/iconfont/iconfont";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter, Route, HashRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyleInit />
        <GlobalStyleFont />
        <Provider store={store}>
          <HashRouter>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" exact component={Login}></Route>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

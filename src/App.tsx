import * as React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Header from "./common/header/Header";

import { GlobalStyleInit } from "./style";
import { GlobalStyleFont } from "./statics/iconfont/iconfont";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyleInit />
        <GlobalStyleFont />
        <Login />
        {/* <Home /> */}
        {/* <Header /> */}
        {/* <div
          style={{ height: "800px", background: "#CCFFFF", padding: "60px" }}
        >
          aa
        </div> */}
      </div>
    );
  }
}

export default App;

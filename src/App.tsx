import * as React from "react";
import Login from "./pages/login/Login";
import { GlobalStyleInit } from "./style";

class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyleInit />
        <Login />
      </div>
    );
  }
}

export default App;

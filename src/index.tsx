import * as React from "react";
import * as ReactDOM from "react-dom";
import PageInterface from "./PageInterface";

class IndexComponent extends React.Component<PageInterface, {}> {
  render() {
    return <h1>hello world!!!123{this.props.color}</h1>;
  }
}

ReactDOM.render(
  <IndexComponent color="Blue" />,
  document.getElementById("root")
);

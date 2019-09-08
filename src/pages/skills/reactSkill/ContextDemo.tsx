import * as React from "react";

const { Provider, Consumer } = React.createContext("default");

class Parent extends React.Component {
  render() {
    return (
      <>
        <Provider value={{ name: "cat", id: 3 }}>
          {this.props.children}
        </Provider>
      </>
    );
  }
}

function Child1() {
  return <Consumer>{value => <p>{value.name}</p>}</Consumer>;
}

export default () => (
  <Parent>
    <div>
      <Child1 />
    </div>
  </Parent>
);

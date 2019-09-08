import * as React from "react";
import { Button } from "antd";

//ref使用的三种方式
export class RefDemo extends React.Component {
  constructor(props) {
    super(props);
    this.objRef = React.createRef(); //{current:null}
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.spanRef.textContent = "hello span";
      this.methodRef.textContent = "hello methodSpan";
      this.objRef.current.textContent = "   cat  ";
    }, 2000);
  }

  render() {
    return (
      <>
        {/*1.string ref 会被废弃，不推荐 */}
        <p ref="spanRef">span</p>
        {/*2.function */}
        <p ref={ele => (this.methodRef = ele)}>spanMethod</p>
        {/*3.createRef */}
        <p ref={this.objRef}>createRefSpan</p>
      </>
    );
  }
}

//forwardRef
const ChildComponent = React.forwardRef((props, ref) => <input ref={ref} />);

export class forwardRefDemo extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.ref.current.value = "ref xx";
  }
  render() {
    return <ChildComponent ref={this.ref} />;
  }
}

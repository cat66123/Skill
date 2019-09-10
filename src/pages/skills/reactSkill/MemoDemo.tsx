import * as React from "react";

//React.memo主要是类似PureComponent,只是它针对函数，毕竟出了Hook
const MemoComp = React.memo(
  props => {
    console.log(props);
    console.log("Memo render");
    return <>hello</>;
  },
  //不写第二个参数的话它会自动判断是否重新渲染
  //可以自行控制，为true的时候不会重新渲染，和shouldComponentUpdate相反。
  () => false
);

const NormalComp = props => {
  console.log("Normal render"); //父组件状态变化，子组件会自动重新渲染
  return <>hah</>;
};

export const ParentComp = () => {
  let [count, setCount] = React.useState(0);
  return (
    <div>
      <MemoComp />
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>add</button>
      <NormalComp />
    </div>
  );
};

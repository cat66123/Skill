import * as React from "react";

export function CountExample() {
  const [count, setCount] = React.useState(0); //State Hook

  //Effect Hook,可以返回函数，相当于组件卸载时执行函数
  //第二个可选参数可以用来判断什么时候执行effect。在第二个参数发生变化的时候才执行effect
  React.useEffect(() => {
    document.title = `Hello ${count}`;
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

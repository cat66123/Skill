import * as React from "react";

function ChildComp(props) {
  /*当子元素只有一个时返回object,多个时返回arr */
  console.log(props.children);

  /*一直返回arr*/
  /*callback嵌套数组都是会被展开成一个的 */
  console.log(React.Children.map(props.children, v => [v, v]));
  return props.children;
}

export function ChildrenDemo() {
  return (
    <ChildComp>
      <p>a</p>
      <p>b</p>
      <>
        <p>c</p>
      </>
    </ChildComp>
  );
}

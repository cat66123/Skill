import * as React from "react";

const LazyComp = React.lazy(() => import("./LazyDemo"));

let promise = "";
let data = "";
function ChildComp() {
  if (data) {
    return <p>{data}</p>;
  }

  promise = new Promise(resolve => {
    setTimeout(() => {
      data = "Resolve";
      resolve();
    }, 2000);
  });
  throw promise;
}

export function SuspenseComponent() {
  return (
    <React.Suspense fallback={"loading"}>
      <ChildComp />
      {/*一个或多个异步组件，throw就会执行fallback,直到promise resolved 
        所有都resolved之后才会显示组件，不然为loading
        */}
      <LazyComp />
    </React.Suspense>
  );
}

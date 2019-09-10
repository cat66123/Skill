import * as React from "react";

function demo1() {
  function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }

  var person = {
    name: "leo",
    friends: ["dog", "bird", "cat"]
  };

  var anotherPerson = object(person); //Object.create(person)
  anotherPerson.name = "mew";
  anotherPerson.friends.push("panda");

  var yetAnotherPerson = object(person);
  yetAnotherPerson.friends.push("flower");

  console.log(person.name); //"leo"
  console.log(anotherPerson.name); //"mew"
  console.log(person.friends); //["dog", "bird", "cat", "panda", "flower"]

  console.log(person);
  console.log(anotherPerson);
  console.log(yetAnotherPerson);
  /*解答：
    1.anotherPerson,yetAnotherPerson的原型是person，是共享的
    2.anotherPerson.name是对实例进行赋值，而不是原型赋值
    3.anotherPerson.friends.push是调用原型中的方法
   */
}

export default () => {
  demo1();
  return <span>x</span>;
};

import React, { useState } from "react";
import Counter from "./Counter";
import Parent from "./Parent";
import CallBack from "./CallBack";

function DemoHook() {
  const display = () => {
    console.log("display");
    return "hello";
  };
  const [demoNum, setdemoNum] = useState(0);
  const [text, setText] = useState(() => display());
  return (
    <>
      <h3>DemoHook</h3>
      <div>{text}</div>
      <button onClick={() => setdemoNum(2)}>click</button>
      <hr />
      <Counter />
      <hr />
      <Parent />
      <hr />
      <CallBack />
    </>
  );
}

export default DemoHook;

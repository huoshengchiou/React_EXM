import React, { useState } from "react";
import Counter from "./Counter";
import Parent from "./Parent";

function DemoHook() {
  const [demoNum, setdemoNum] = useState(0);
  return (
    <>
      <h3>DemoHook</h3>
      <hr />
      <Counter />
      <hr />
      <Parent />
    </>
  );
}

export default DemoHook;

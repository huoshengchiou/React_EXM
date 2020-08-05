import React, { useState } from "react";

function DemoHook() {
  const [demoNum, setdemoNum] = useState(0);
  return (
    <>
      <div>DemoHook</div>
      <button onClick={() => { }}>switch</button>
    </>
  );
}

export default DemoHook;

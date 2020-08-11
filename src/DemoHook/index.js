import React, { useState, useEffect } from "react";
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
  const [disapper, setDisapper] = useState(false);

  useEffect(() => {
    return () => {
      alert("byebye");
    };
  }, []);

  return (
    <>
      <h3>DemoHook</h3>
      <div>{text}</div>
      <button onClick={() => setdemoNum(2)}>click</button>
      <button
        onClick={() => {
          setDisapper(!disapper);
        }}
      >
        off count
      </button>
      <hr />
      {!disapper && <Counter />}
      <hr />
      <Parent />
      <hr />
      <CallBack />
    </>
  );
}

export default DemoHook;

import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Parent from "./Parent";
import CallBack from "./CallBack";

function DemoHook() {
  console.log("DemoHook run");
  const initialSetting = () => {
    console.log("initialSetting");
    const obj = { initialVal: "hello" };
    return obj.initialVal;
  };

  const [demoNum, setdemoNum] = useState(0);
  const [text, setText] = useState(() => initialSetting());
  const [disapper, setDisapper] = useState(false);

  useEffect(() => {
    return () => {
      alert("byebye");
    };
  }, []);
  const handleChangeText = () => {
    setText("change");
  };
  return (
    <>
      <h3>DemoHook</h3>
      <div>{text}</div>
      <button onClick={handleChangeText}>change text</button>
      {/* <button onClick={() => setdemoNum(2)}>click</button>
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
      <CallBack /> */}
    </>
  );
}

export default DemoHook;

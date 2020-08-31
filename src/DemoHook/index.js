import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import Parent from "./Parent";
import CallBack from "./CallBack";
import HOCguest from './HOCguest'
import { myHOC } from './hoc'
import Child2 from './Parent/Child2'
import ClassText from './Parent/ClassText'

function DemoHook() {


  console.log("DemoHook render");




  const initialSetting = () => {
    // console.log("initialSetting func run");
    const obj = { initialVal: "initial value" };
    return obj.initialVal;
  };


  const [text, setText] = useState(initialSetting());


  const handleChangeText = () => {
    setText("change value");
  };


  // ----------------------------------
  const [disapper, setDisapper] = useState(false);
  // ----------------------------------


  const EnhanceGuest = myHOC(HOCguest)

  return (
    <>

      <h3>DemoHook</h3>
      {/* <Child2 /> */}
      {/* <hr /> */}
      {/* <ClassText /> */}
      {/* ------------------------------------------ */}
      <div>{text}</div>
      <button onClick={handleChangeText}>change text</button>
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
      {/* --------------------------------------------------- */}
      {/* <div>context</div> */}
      {/* <Parent /> */}
      <hr />
      {/* <CallBack /> */}
      <hr />
      {/* <HOCguest />
      <EnhanceGuest /> */}
    </>
  );
}

export default DemoHook;

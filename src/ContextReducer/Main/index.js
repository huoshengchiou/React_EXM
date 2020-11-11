import React, { useState, useContext, useCallback, memo } from "react";
import { ContextShip } from "../Context";
import Num from "./Num";
import Obj from "./Obj";

function Main() {
  //   const { num, setNum, setTestObj, testObj } = useContext(ContextShip);

  const [str, setStr] = useState(0);
  const [color, setColor] = useState(false);

  //   const add = useCallback(() => {
  //     setNum((pre) => pre + 1);
  //   }, [setNum]);

  const getNum = useCallback(() => {
    return str;
  }, [str]);

  return (
    <>
      <button onClick={() => setStr((pre) => pre + 1)}>add</button>
      <button onClick={() => setColor((pre) => !pre)}>toggle</button>
      <Num setStr={setStr} str={str} />
      <div>{color && 1}</div>
      {/* <Obj /> */}
    </>
  );
}

export default memo(Main);

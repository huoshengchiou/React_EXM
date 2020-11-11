import React, { useState, useEffect, useCallback } from "react";
import { ContextShip } from "../../Context";
import Child from "./Child";

function Num({ setStr, str }) {
  const updateNum = useCallback(() => {
    return str;
  }, [str]);

  const [theme, setTheme] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setStr((pre) => pre + 1);
        }}
      >
        btnNum
      </button>
      <button
        onClick={() => {
          setTheme((pre) => !pre);
        }}
      >
        change color
      </button>
      <h1 style={{ color: theme ? "blue" : "red" }}>來自上面的顏色</h1>

      <Child updateNum={updateNum} />
    </>
  );
}

export default Num;

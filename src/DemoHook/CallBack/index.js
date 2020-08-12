import React, { useState, useCallback } from "react";
import CallChild from "./CallChild";

function CallBack() {
  console.log("CallBack render");
  //states
  const [colorSwitch, setColorSwitch] = useState(false);
  const [num, setNum] = useState(0);

  const getNum = () => {
    return num;
  };

  //useCallback
  //   const getNum = useCallback(() => {
  //     return num;
  //   }, [num]);

  return (
    <>
      <div>CallBack</div>
      <h3 style={{ color: `${colorSwitch ? "teal" : "red"}` }}>DisplayText</h3>
      <button
        onClick={() => {
          setColorSwitch((preState) => !preState);
        }}
      >
        colorSwitch
      </button>

      {/* --------------------------------------------- */}

      <CallChild getNum={getNum} />
      <button onClick={() => setNum((preState) => preState + 1)}>
        Add Num
      </button>
    </>
  );
}

export default CallBack;

import React, { useReducer } from "react";
import { Mycontext } from "./Context";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const reducer = () => {};

function DIS_performance() {
  const init = {
    redNum: 0,
    redObj: [{ one: "1" }, { two: "2" }, { three: "3" }],
  };

  const [state, dispatch] = useReducer(reducer, init);
  return (
    <>
      {console.log("major parent")}
      <div>major parent</div>
      <Mycontext state={state} dispatch={dispatch}>
        <Child1 />
        <Child2 />
        <Child3 />
      </Mycontext>
    </>
  );
}

export default DIS_performance;

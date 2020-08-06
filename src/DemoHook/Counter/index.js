import React, { useEffect, useRef, useState } from "react";
import Display from "../Display";
function Counter() {
  const fetchfunc = () => {
    console.log("run");
    return 0;
  };
  const Render = useRef(0);
  const [count, setCount] = useState(() => 0);
  Render.current += 1;

  const addcount = () => {
    console.log("addcount run");

    // setCount(count + 1);
    setCount((prestate) => prestate + 1);
    // setCount((prestate) => prestate + 1);
  };

  useEffect(() => {
    setCount(fetchfunc());
  }, []);

  // const [arr, setArr] = useState([{ id: 1 }, { id: 2 }]);

  return (
    <>
      <h3>Count</h3>
      <div>{`render_${Render.current}_times`}</div>
      <pre></pre>
      <div>{count}</div>
      <button onClick={() => addcount()}>+</button>
      <h3>Display</h3>
      <Display count={count} />
      {/* <button
        onClick={() =>
          setArr((preState) => [
            ...preState,
            preState.map((val) => (val.id === 1 ? (val.id = 3) : val)),
          ])
        }
      >
        +
      </button>

      {arr.map((val) => {
        return <Display id={val.id} />;
      })} */}
    </>
  );
}

export default Counter;

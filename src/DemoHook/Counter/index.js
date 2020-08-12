import React, { useEffect, useRef, useState } from "react";
import DisplayCount from "./DisplayCount";
function Counter() {
  console.log("Counter render");

  //record render
  const Render = useRef(0);

  // -----------inital set func------
  const fetchfunc = () => {
    console.log("fetchfunc run");
    return 0;
  };
  const [count, setCount] = useState(0);

  Render.current += 1;

  const addcount = () => {
    console.log("addcount run");

    // setCount(count + 1);


    setCount((prestate) => prestate + 1);
    // setCount((prestate) => prestate + 1);
  };

  useEffect(() => {
    // setCount(fetchfunc());

    return () => {
      alert("byebye Counter");
    };
  }, []);


  return (
    <>
      <h3>Count {`render_${Render.current}_times`}</h3>
      <button onClick={() => addcount()}>+</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>

      {/* ----------------------------------------- */}
      <h3>Display</h3>
      <DisplayCount count={count} />


    </>
  );
}

export default Counter;

import React, { useState, useRef, useEffect } from "react";

function Child({ count }) {
  return (
    <>
      <div>{count}</div>
    </>
  );
}

function TryUseState() {
  const fetchfunc = () => {
    console.log("run");
    return 0;
  };
  const Render = useRef(0);
  const [count, setCount] = useState(0);
  Render.current += 1;

  const addcount = () => {
    setCount(count + 1);
    // setCount((prestate) => prestate + 1);
    // setCount((prestate) => prestate + 1);
  };

  useEffect(() => {
    setCount(fetchfunc());
  }, []);
  return (
    <>
      <div>{`render_${Render.current}_times`}</div>
      <pre></pre>
      <div>{count}</div>
      <button onClick={() => addcount()}>+</button>
      <div>Child</div>
      <Child count={count} />
    </>
  );
}

export default TryUseState;

import React, { useReducer, useState, useRef } from "react";

const ACTIONS = {
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

// return new updated state
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREASE:
      return { count: state.count + 1 };
    case ACTIONS.DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function TryUseReduce() {
  const renderTimes = useRef(0);
  //function|initial  dispatch call for update
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // const [count, setCount] = useState(() => 0);

  const increase = () => {
    dispatch({ type: ACTIONS.INCREASE });
    // setCount((preCount) => preCount + 1);
  };
  const decrease = () => {
    dispatch({ type: ACTIONS.DECREASE });
  };
  renderTimes.current += 1;
  return (
    <>
      <h2>try reducer</h2>
      <h4>{`render ${renderTimes.current} Times`}</h4>
      <h4>{`count: ${state.count}`}</h4>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default TryUseReduce;

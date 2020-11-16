import React, { useReducer, useContext, useEffect, useRef, memo } from "react";

import { myContext } from "../Context";
import Button from "./Button";

const ACTION = {
  CHANGE_OBJ: "CHANGE_OBJ",
};

const reducer = (mystate, action) => {
  switch (action) {
    case ACTION.CHANGE_OBJ:
      const { story } = mystate;
      const arr = story.map((val) =>
        val.monster === "bird" ? { monster: "fish" } : val
      );
      return { ...mystate, story: arr };
    default:
      return mystate;
  }
};

const Button2 = memo(({ dispatch, ACTION }) => {
  return (
    <>
      {console.log("btn2")}
      <button
        onClick={() => {
          dispatch(ACTION.CHANGE_OBJ);
        }}
      >
        dispatch
      </button>
    </>
  );
});

function ReducerChild() {
  const { setAllState } = useContext(myContext);
  const init = {
    color: true,
    story: [{ monster: "dragon" }, { monster: "bird" }],
  };
  const [mystate, dispatch] = useReducer(reducer, init);
  useEffect(() => {
    setAllState(mystate);
  }, [mystate, setAllState]);

  return (
    <>
      <Button dispatch={dispatch} ACTION={ACTION} />
      <Button2 dispatch={dispatch} ACTION={ACTION} />
    </>
  );
}

export default ReducerChild;

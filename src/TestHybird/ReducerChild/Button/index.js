import React from "react";

function Button({ dispatch, ACTION }) {
  return (
    <>
      {console.log("btn")}
      <button
        onClick={() => {
          dispatch(ACTION.CHANGE_OBJ);
        }}
      >
        dispatch
      </button>
    </>
  );
}

export default Button;

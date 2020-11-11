import React from "react";
import { Context } from "./Context";
import Main from "./Main";
function ContextReducer() {
  return (
    <>
      <Context>
        <Main />
      </Context>
    </>
  );
}

export default ContextReducer;

import React from "react";
import { Context } from "./Context";

import ReducerChild from "./ReducerChild";

function TestHybird() {
  return (
    <>
      <Context>
        <ReducerChild />
      </Context>
    </>
  );
}

export default TestHybird;

import React, { useState } from "react";
import Child from "./Child";
import StateStore from "./StateStore";

function Parent() {
  return (
    <>
      <StateStore>
        <Child />
      </StateStore>
    </>
  );
}

export default Parent;

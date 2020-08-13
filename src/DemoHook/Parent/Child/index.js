import React, { useContext } from "react";

import { stateProvider } from "../StateStore";

function Child() {
  const { hello } = useContext(stateProvider);
  return <>
    <div>{hello}</div>
  </>;
}

export default Child;

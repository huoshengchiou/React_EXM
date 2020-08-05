import React, { useContext } from "react";

import { stateProvider } from "../StateStore";

function Child() {
  const {} = useContext(stateProvider);
  return <></>;
}

export default Child;

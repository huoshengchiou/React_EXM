import React, { useEffect, useState } from "react";

import chatStore from "../rxjsSubjects/test";

const TestRxjs = () => {
  const [render, setRender] = useState(null);
  useEffect(() => {
    chatStore.subscribe(setRender);
  }, []);
  return (
    <>
      <button onClick={() => chatStore.sendMessage("hello")}>click</button>
    </>
  );
};

export default TestRxjs;

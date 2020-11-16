import React, { createContext, useState, useEffect } from "react";

export const myContext = createContext();

export function Context(props) {
  const [allState, setAllState] = useState(null);

  const obj = { allState, setAllState };

  useEffect(() => {
    if (null) return;
    console.log("context改變");
  }, [allState]);

  return (
    <>
      <myContext.Provider value={obj}>{props.children}</myContext.Provider>
    </>
  );
}

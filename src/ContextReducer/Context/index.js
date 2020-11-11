import React, { createContext, useState } from "react";

export const ContextShip = createContext();
ContextShip.displayName = "ContextShip";

export const Context = (props) => {
  const [num, setNum] = useState(0);
  const [string, setString] = useState("");
  const [testObj, setTestObj] = useState({ name: "jack" });

  const store = React.useMemo(
    () => ({
      num,
      setNum,
      testObj,
      setTestObj,
      string,
      setString,
    }),
    [num, string, testObj]
  );
  //   const obj = {
  //     num,
  //     setNum,
  //     testObj,
  //     setTestObj,
  //   };

  return (
    <>
      <ContextShip.Provider value={store}>
        {props.children}
      </ContextShip.Provider>
    </>
  );
};

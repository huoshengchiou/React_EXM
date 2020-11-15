import React, { createContext, useState } from "react";

export const myContext = createContext();

//func 也需要跟obj一樣進行考慮，如果context一刷新，func的記憶體位置也會跟著改動，拉出context外就不會受到影響
const testFunc = () => {
  console.log("test");
};

export const Mycontext = (props) => {
  console.log("Mycontext");

  const [toggle, setToggle] = useState(false);

  const [arr, setArr] = useState([]);

  const [num, setNum] = useState(0);

  //   const testFunc = () => {
  //     console.log("test");
  //   };

  const value = { num, setNum, toggle, setToggle, arr, setArr, testFunc };

  return (
    <>
      <myContext.Provider value={value}>{props.children}</myContext.Provider>
    </>
  );
};

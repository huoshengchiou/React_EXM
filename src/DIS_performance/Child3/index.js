import React, { useContext, useState, memo, useCallback, useRef } from "react";
import { myContext } from "../Context";

// const Button = memo(({ handleCount }) => {
//   return (
//     <>
//       {console.log("btn render")}
//       <button onClick={handleCount}>count</button>
//     </>
//   );
// });

const Button = ({ handleCount }) => {
  return (
    <>
      {console.log("btn render")}
      <button onClick={handleCount}>count</button>
    </>
  );
};

const arr1 = [
  { name: "jack", age: "25" },
  { name: "mary", age: "22" },
  { name: "joe", age: "24" },
];

const arr2 = [
  { name: "leo", age: "20" },
  { name: "simon", age: "18" },
];

function Child3() {
  const { toggle } = useContext(myContext);
  const [count, setCount] = useState(0);

  const [testArr, setTestArr] = useState([]);

  const handleCount = useCallback(() => {
    setCount((pre) => pre + 1);
  }, []);

  //   const handleCount = () => {
  //     setCount((pre) => pre + 1);
  //   };

  const refToggle = useRef(false);
  //   const handleArr = () => {
  //     if (refToggle.current) {
  //       setTestArr(arr1);
  //       refToggle.current = !refToggle.current;
  //     } else {
  //       setTestArr(arr2);
  //       refToggle.current = !refToggle.current;
  //     }
  //   };

  const handleArr = useCallback(() => {
    if (refToggle.current) {
      setTestArr(arr1);
      refToggle.current = !refToggle.current;
    } else {
      setTestArr(arr2);
      refToggle.current = !refToggle.current;
    }
  }, []);

  return (
    <>
      {console.log("Child3")}
      <div style={{ color: toggle ? "red" : "teal" }}>child3</div>
      <div>count 現在是 {count}</div>
      {testArr.map((val, idx) => (
        <div key={idx}>{val.name}</div>
      ))}
      <Button handleCount={handleArr} />
    </>
  );
}

export default Child3;

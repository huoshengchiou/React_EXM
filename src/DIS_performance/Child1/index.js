import React, { useContext, useMemo } from "react";
import { myContext } from "../Context";
import Num from "./Num";
const arr1 = [
  { name: "jack", age: "25" },
  { name: "mary", age: "22" },
  { name: "joe", age: "24" },
];

const arr2 = [
  { name: "leo", age: "20" },
  { name: "simon", age: "18" },
];
//可以不受額外context改變干擾
const MemoNum = React.memo(function Num({ num }) {
  return (
    <>
      {console.log("menoNum")}
      <div>顯示的數字是{num}</div>
    </>
  );
});

const NoMemoNum = ({ num }) => {
  return (
    <>
      {console.log("NoMemoNum")}
      <div>顯示的數字是{num}</div>
    </>
  );
};

// const MemoNum2 = useMemo(function Num({ num }) {
//     return (
//       <>
//         {console.log("menoNum2")}
//         <div>顯示的數字是{num}</div>
//       </>
//     );
//   },[num]);

function Child1() {
  const { num, setNum, setArr, arr, setToggle } = useContext(myContext);

  return (
    <>
      {console.log("Child1")}
      <button onClick={() => setNum((pre) => pre + 1)}>add num</button>
      <button
        onClick={() => {
          if (arr.length !== 2) {
            setArr(arr2);
          } else {
            setArr(arr1);
          }
        }}
      >
        set arr
      </button>
      <button onClick={() => setToggle((pre) => !pre)}>toggle</button>
      <MemoNum num={num} />
      <NoMemoNum num={num} />
    </>
  );
}

export default Child1;

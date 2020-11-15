import React, { useContext, useMemo, useCallback } from "react";
import { myContext } from "../Context";

//change only when arr changes
const MemoArr = React.memo(({ arr, testFunc }) => {
  return (
    <>
      {console.log("MemoArr")}
      <button onClick={testFunc}>test</button>
      {arr.map((val, idx) => (
        <div key={idx}>{val.name}</div>
      ))}
    </>
  );
});

const WithOutMemoArr = ({ arr }) => {
  return (
    <>
      {console.log("with no MemoArr")}

      {arr.map((val, idx) => (
        <div key={idx}>{val.name}</div>
      ))}
    </>
  );
};

const UseMemoArr = ({ arr }) => {
  const myfunction = (arr) => {
    return (
      <>
        <div>
          {console.log("useMemoArr")}
          {arr.map((val, idx) => (
            <div key={idx}>{val.name}</div>
          ))}
        </div>
      </>
    );
  };
  const value = useMemo(() => {
    return myfunction(arr);
  }, [arr]);

  return <div>MyComponent useMemo. Value: {value}</div>;
};

function Child2() {
  const { arr, setArr, testFunc, setToggle } = useContext(myContext);

  const myfunction = (arr) => {
    return (
      <>
        <div>
          {console.log("useMemoArr")}
          {arr.map((val, idx) => (
            <div key={idx}>{val.name}</div>
          ))}
        </div>
      </>
    );
  };
  const memoTest = useMemo(() => {
    return myfunction(arr);
  }, [arr]);

  const myReturnJSX = (arr) => {
    return (
      <>
        <div>
          {console.log("useCallbackArr")}
          {arr.map((val, idx) => (
            <div key={idx}>{val.name}</div>
          ))}
        </div>
      </>
    );
  };

  const memoizedCallback = useCallback(() => {
    return myReturnJSX(arr);
  }, [arr]);

  return (
    <>
      <button onClick={() => setArr([...arr, { name: "xxx", age: "20" }])}>
        change arr
      </button>
      {console.log("Child2")}
      <MemoArr arr={arr} testFunc={testFunc} />
      <WithOutMemoArr arr={arr} />
      {/* <UseMemoArr arr={arr} /> */}
      {memoTest}
    </>
  );
}

export default Child2;

//   const equals = (a, b) => {
//     return a === b ? "Equal" : "Different";
//   };

//   const App = () => {
//     const [state, setState] = React.useState("");
//     const [someArg, setSomeArg] = React.useState("argument");

//     const handleSomethingUseCallback = React.useCallback(() => {}, [someArg]);
//     const handleSomething = e => {
//       setState(e.target.value);
//     };

//     const handleSetState = e => {
//       setState(e.target.value);
//     };

//     const refHandleSomethingUseCallback = React.useRef(
//       handleSomethingUseCallback
//     );
//     const refHandleSomething = React.useRef(handleSomething);

//     return (
//       <div className="App">
//         <input type="text" value={state} onChange={handleSetState} />
//         <p>
//           handleSomethingUseCallback:{" "}
//           {equals(
//             refHandleSomethingUseCallback.current,
//             handleSomethingUseCallback
//           )}
//         </p>
//         <p>
//           handleSomething:{" "}
//           {equals(
//             refHandleSomething.current,
//             handleSomething
//           )}
//         </p>
//         <MyComponent
//           handleSomething={handleSomethingUseCallback}
//           useCallback={true}
//         />
//         <MyComponent handleSomething={handleSomething} useCallback={false} />
//       </div>
//     );
//   };
//   ReactDOM.render(<App />, document.getElementById("root"));

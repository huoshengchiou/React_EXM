import React, { useEffect, useRef, useState } from "react";
import DisplayCount from "./DisplayCount";
function Counter() {
  console.log("Counter render");

  //record render
  const Render = useRef(0);
  const Render2 = useRef(0);

  console.log('Render.current', Render.current)

  // -----------inital set func------
  const fakeFetch = () => {
    console.log("fetchfunc run");
    return 0;
  };
  const [count, setCount] = useState(() => fakeFetch());

  const label = useRef('---------')
  const [count1, setCount1] = useState('here');

  Render.current += 1;

  const addcount = () => {
    console.log("addcount");
    // Render2.current += 8
    // setCount1('hello')
    setCount((prestate) => prestate + 1);
    // setCount((prestate) => prestate + 1);
  };
  const myDom = useRef(null)



  const callBack = () => {
    console.log('bye bye counter')
  }




  useEffect(() => {
    // setCount(fakeFetch());
    // console.log('myDom', myDom.current)

    // if (count === 0) {

    //   console.log('count是0')
    //   return
    // }
    // console.log('最初的count')
    return callBack


  }, []);


  useEffect(() => {
    // setCount(fakeFetch());
    // console.log('count callBack', count)

    if (count === 1) {
      console.log('count是1')
      return
    }
    console.log('count after 1')


  }, [count]);





  return (
    <>
      <div>{count1}</div>
      <h3>Count {`render_${Render.current}_times`}</h3>
      <button onClick={() => addcount()}>+</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <div ref={myDom}>my DOM</div>

      {/* ----------------------------------------- */}
      <h3>Display count:</h3>
      <DisplayCount count={count} />


    </>
  );
}

export default Counter;

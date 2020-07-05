import React, { useState, useMemo, useEffect } from "react";

const Test_memo = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  //模擬慢速code
  const maketwo = (a) => {
    for (let i = 0; i < 1000000000; i++) {}
    return a * 2;
  };
  //count 會被觀測有沒有變化再評估整體重render
  //以下的用法會強制電腦用記憶體去記憶
  //只建議用在較複雜的function
  const output = useMemo(() => {
    return maketwo(count);
  }, [count]);
  //count is the dependency
  //   const output = maketwo(count);
  //每render一次就會有新的obj被創造一次，所以useEffect會被重啟一次 reference in memory diff
  //referential equality
  const themeStyle = useMemo(() => {
    return {
      background: toggle && "black",
    };
  }, [toggle]);
  useEffect(() => {
    console.log("theme change");
  }, [themeStyle]);
  return (
    <>
      <h3>{count}</h3>
      <div
        style={{
          width: "200px",
          height: "40px",
          background: toggle && "black",
          color: toggle && "white",
        }}
      >
        {output}
      </div>
      <button onClick={() => setToggle(!toggle)}>theme</button>

      <button
        onClick={() => {
          setCount((pro) => pro + 1);
        }}
      >
        plus
      </button>
    </>
  );
};

export default Test_memo;

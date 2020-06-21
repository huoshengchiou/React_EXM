import React, { useEffect, useState, useRef } from "react";
import { useTimerprovider, useInterval } from "./useTimerprovider";

const Banner = () => {
  // fetche管理使用者狀態，btn狀態轉換，身分判定權大於遊戲
  //   只需要fetch一次

  // const localCounter
  const [FetchOn, setFetchOn] = useState(false);

  const [ShowSignal, setShowSignal] = useState("");

  const collectObj = {
    FetchOn,
    setFetchOn,
    ShowSignal,
  };

  const { NewTime, FetchBackState } = useTimerprovider(collectObj);

  //更新秒數?  countdown寫在本頁?  //setTime change state 啟動下一次fetch

  const newTimeRef = useRef(null);

  console.log("1");

  const renderRef = useRef(0);
  //   console.log(renderRef.current + 1);
  useEffect(() => {
    if (NewTime === 0) return;
    newTimeRef.current = NewTime;
    const timer = setInterval(() => {
      // console.log(FetchBackState);
      setFetchOn(true);
    }, newTimeRef.current);
    return () => clearInterval(timer);
  }, [NewTime]);

  //同步fetch結果
  useEffect(() => {
    setShowSignal(FetchBackState);
  }, [FetchBackState]);

  const [num, setnum] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setnum(num + 1);
  }, 1000);

  // 利用狀態on/off
  //   useInterval(() => {
  //     setCount(count + 1);
  //   }, isRunning ? delay : null);
  return (
    <>
      <h4>Banner</h4>
      <h4 style={{ background: "lightyellow" }}>'{ShowSignal}</h4>
      <button
        onClick={() => {
          setFetchOn(true);
        }}
      >
        click
      </button>
      <h4>{num}</h4>
    </>
  );
};

export default Banner;

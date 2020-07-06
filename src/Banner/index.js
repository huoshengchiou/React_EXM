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

  const { FchBkDelay, FchBkState } = useTimerprovider(collectObj);

  //更新秒數?  countdown寫在本頁?  //setTime change state 啟動下一次fetch

  const DelayTimeRef = useRef(null);

  const renderRef = useRef(0);
  //   console.log(renderRef.current + 1);
  useEffect(() => {
    if (FchBkDelay === 0) return;
    DelayTimeRef.current = FchBkDelay;
    const timer = setInterval(() => {
      //啟動下一次fetch  //TODO 同步更新user狀態?
      setFetchOn(true);

    }, DelayTimeRef.current);
    console.log('state是', FchBkState);
    console.log('時間長度', FchBkDelay)
    return () => clearInterval(timer);
  }, [FchBkDelay]);












  // ------------------------------------------------------------------------

  const gamecheckin = useRef(0)
  const gamecheckinClose = useRef(0)
  const IsSecondTimerRun = useRef(false)

  const [time, settime] = useState(0)

  useEffect(() => {
    gamecheckin.current = time
    gamecheckinClose.current = time
    if (!gamecheckin.current || !gamecheckinClose.current) return
    function secondTimer(delay, callback) {
      //run once close
      if (IsSecondTimerRun.current) return
      console.log(delay)
      setTimeout(() => {
        console.log('CD中')
        //do something
        if (callback) callback()
        return secondTimer(gamecheckinClose.current, () => { IsSecondTimerRun.current = true })
      }, delay)

    }
    secondTimer(gamecheckin.current)

  }, [time])







  //同步fetch結果
  useEffect(() => {
    setShowSignal(FchBkState);
  }, [FchBkState]);

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
      <button onClick={() => { settime(5000) }}>secondtimer</button>
    </>
  );
};

export default Banner;

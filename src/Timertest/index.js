import React, { useState, useEffect, useRef } from "react";

function Timertest() {
  // const [time, setTime] = useState(0)
  // const flag = true
  // useEffect(() => {
  //     const timerId = setInterval(() => {
  //         setTime((t) => t + 1);
  //     }, 1000);
  //     return () => clearInterval(timerId);
  // }, []);

  const time1 = useRef(0);
  const time2 = useRef(0);
  //    同時拉t8t ck 需求 //不需要則往下fetch即可//先setreg intial狀態再跑timer//根據timer再轉外觀  //只有ongoing前的需要設timer
  // fetch===>fill ref====>setInitial render====>regfinish//倒數1 打一次api後拉回reg狀態

  useEffect(() => {
    time1.current = 10;
    time2.current = 20;
    setFirstTimer(time1.current);
  }, []);

  const [firstTimer, setFirstTimer] = useState(0);
  const [secondTimer, setSecondTimer] = useState(0);
  const gameStatus = 2;
  useEffect(() => {
    if (firstTimer === 0) return;
    const timerId = setInterval(() => {
      if (firstTimer === 1) {
        switch (gameStatus) {
          case "1":
            break;
          case "2":
            setSecondTimer(10);
            break;
          default:
            return;
        }
      }
      setFirstTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [firstTimer]);

  useEffect(() => {
    if (secondTimer === 0) return;
    const timerId2 = setInterval(() => {
      if (secondTimer === 1) {
        setFirstTimer(time2.current);
      }
      setSecondTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(timerId2);
  }, [secondTimer]);

  return (
    <>
      <div>{firstTimer}</div>
      <div>{secondTimer}</div>
    </>
  );
}

export default Timertest;

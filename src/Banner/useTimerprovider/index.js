/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

//get event info

export const useTimerprovider = ({ FetchOn, setFetchOn, ShowSignal }) => {
  //count func
  const [NewTime, setNewTime] = useState(0);
  const [FetchBackState, setFetchBackState] = useState("");
  const LastShow = useRef("");

  function fetch1() {
    // console.log("here");
    setNewTime(3000);
    setFetchBackState("new state");
    setFetchOn(false);

    //當fetch回來的結果為end game 停止迴圈
  }

  useEffect(() => {
    if (FetchOn) {
      console.log("進來了");
      fetch1();
    }
    return;
  }, [FetchOn]);

  return { NewTime, FetchBackState };
};

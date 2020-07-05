import React, { useState, useEffect } from "react";

export const Test_effect = () => {
  const [fetchsg, setfetchsg] = useState("");
  //ref的應用在於紀錄上一個state，進入一個DOM,保留一個不受render影響的變數
  useEffect(() => {
    fetch("URL")
      .then((res) => res.json())
      .then((json) => console.log(json));

    return () => {
      //會在下一次變更前先動clear somthing
    };
  }, [fetchsg]);
  return <></>;
};

export default Test_effect;

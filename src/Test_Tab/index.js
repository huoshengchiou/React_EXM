import React, { useState } from "react";
import classes from "./style.module.scss";

const Test_Tab = () => {
  const TabList = ["home", "my", "refernce"];

  const [x, setX] = useState(0);

  return (
    <>
      <div className={classes.edgeWrapper}>
        <ul className={classes.listWrapper}>
          <li
            className={classes.listUnit}
            onClick={(e) => {
              console.log(e.target);
            }}
          >
            eweqweqewq{" "}
          </li>
          <li className={classes.listUnit}>qweqe</li>
          <li className={classes.listUnit}>qwewqeqwewqe</li>
          <div className={classes.moveBrick} style={{ left: `${x}px` }}></div>
        </ul>
      </div>
      <button onClick={() => setX((prestate) => prestate + 100)}>123</button>
    </>
  );
};

export default Test_Tab;

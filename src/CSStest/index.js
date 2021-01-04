import React from "react";
import classes from "./style.module.scss";

const CSStest = () => {
  const arr = new Array(6).fill(null).map((val, idx) => (
    <>
      <div className={classes.block}>{idx}</div>
    </>
  ));
  return (
    <>
      <div className={classes.wrap2}>
        <div className={classes.wrap}>
          {arr}
          {/* <div className={classes.block2}></div> */}
        </div>
      </div>
    </>
  );
};

export default CSStest;

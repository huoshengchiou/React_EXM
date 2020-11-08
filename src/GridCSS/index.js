import React from "react";
import classes from "./style.module.scss";

function GridCSS() {
  return (
    <>
      <main>
        <div className={classes.box1}>
          <h1>box1</h1>
        </div>
        <div className={classes.box2}>
          <h1>box2</h1>
        </div>
        <div className={classes.box3}>
          <h1>box3</h1>
        </div>
      </main>
      <div className={classes.dif}>
        <div className={classes.box4}>
          <h1>box4</h1>
        </div>
        <div className={classes.box5}>
          <h1>box5</h1>
        </div>
        <div className={classes.box6}>
          <h1>box6</h1>
        </div>
      </div>
    </>
  );
}

export default GridCSS;

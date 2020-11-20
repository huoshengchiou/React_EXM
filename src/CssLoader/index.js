import React from "react";

import classes from "./style.module.scss";

const CssLoader = () => {
  console.log(1);

  const promise = () => {
    return new Promise((resolve, reject) => {
      reject("失敗");
    });
  };
  promise().then(
    () => {
      console.log("成功");
    },
    () => {
      console.log("失敗");
    }
  );
  return (
    <>
      {/* spinner */}
      <div className={classes.spinner}>
        <div></div>
        <div></div>
      </div>
      {/* bouncing balls */}
      <div className={classes.bouncer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* flipping squares */}
      <div className={classes.square}>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default CssLoader;

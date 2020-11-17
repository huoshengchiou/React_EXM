import React from "react";

import classes from "./style.module.scss";

const CssLoader = () => {
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

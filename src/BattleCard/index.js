import React from "react";
import classes from "./style.module.scss";
const BattleCard = () => {
  return (
    <>
      <div className={classes.cardWrapper}>
        <div className={classes.cardEdge}>
          <div className={classes.content}>
            <div className={classes.top}></div>
            <div className={classes.mid}></div>
            <div className={classes.down}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BattleCard;

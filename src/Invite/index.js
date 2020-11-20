import React from "react";

import classes from "./style.module.scss";

function Invite() {
  return (
    <>
      <div className={classes.cardWrapper}>
        <div className={classes.Book}></div>
        <div className={classes.contentWrapper}>
          {/* <div className={classes.cardA}></div> */}
          <section className={classes.cardB}>
            {Array(9).fill(
              <div className={classes.inviteUnit}>
                <div className={classes.info}>
                  <h3>%ClubName%</h3>
                </div>
                <div className={classes.actionPart}>
                  <p>Invited</p>
                  {/* <p>Already in club</p> */}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default Invite;

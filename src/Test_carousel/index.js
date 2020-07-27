import React from 'react'

import classes from './style.module.scss';
// npm install node-sass

function Test_carousel() {

    const arr = []

    return (
        <>
            <div className={classes.wrapper}>
                <div className={`${classes.divori} ${classes.div1}`}></div>
                <div className={`${classes.divori} ${classes.div2}`}></div>
                <div className={`${classes.divori} ${classes.div3}`}></div>
            </div>
            <div className={classes.allwrapper}>
                <h3>test ca</h3>
                <div className={classes.carouselwindow}>

                </div>

            </div>



        </>
    )
}

export default Test_carousel

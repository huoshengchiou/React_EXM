import React, { useRef, useEffect } from 'react'
import classes from "./style.module.scss";

function Test_listarr() {

    const leftWindow = useRef(null)
    const rightWindow = useRef(null)


    const test = e => {
        console.log(e)
    }


    useEffect(() => {
        leftWindow.current.addEventListener('scroll', () => { test() })
        console.log(leftWindow.current)

    }, [])





    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.window}>
                    <div className={classes.infoWrapper}>
                        <div className={classes.leftWindow} ref={leftWindow}>
                            <div className={classes.leftSide}></div>
                        </div>
                        <div className={classes.rightWindow} ref={rightWindow}>
                            <div className={classes.rightSide}></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Test_listarr

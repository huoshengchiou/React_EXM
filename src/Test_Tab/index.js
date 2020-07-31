import React from 'react'
import classes from './style.module.scss';

const Test_Tab = () => {

    const TabList = ['home', 'my', 'refernce']



    return (
        <>
            <div className={classes.edgeWrapper}>
                <ul className={classes.listWrapper}>
                    <li className={classes.listUnit} onClick={e => { console.log(e.target) }}>eweqweqewq </li>
                    <li className={classes.listUnit}>qweqe</li>
                    <li className={classes.listUnit}>qwewqeqwewqe</li>
                </ul>
            </div>

        </>
    )
}

export default Test_Tab

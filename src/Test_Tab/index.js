import React, { useState, useRef } from "react";
import classes from "./style.module.scss";
import { useEffect } from "react";
// { TabList, pathDomain }
const Test_Tab = ({ Tablist, pathDomain = '3001' }) => {
    //Tablist without disabled ok
    const testTablist = [
        {
            itemName: 'home',
            path: '/home',
            // disabled: false,
        },
        {
            itemName: 'my',
            path: '/my',
            // disabled: false,
        },
        {
            itemName: 'reference',
            path: '/reference',
            disabled: true,
        }
    ]

    const runOnce = useRef(false)
    //currentSelect Item Idx and path
    const currentSelectIdx = useRef(null)
    const currentPath = useRef(null)
    //generate ListUnit DOM and its width
    const ListUnit = useRef(null)
    const UnitWidth = useRef(null)
    //ListUnit single padding width
    const SinglePaddingWidth = useRef(null)
    //render Brick width
    const [BrickWidth, setBrickWidth] = useState(null)

    //initial func setting all parameter
    const initialSetting = () => {
        //------------v-Distance setting----v------
        UnitWidth.current = window.getComputedStyle(ListUnit.current, null).getPropertyValue('width').split('p')[0] * 1
        SinglePaddingWidth.current = window.getComputedStyle(ListUnit.current, null).getPropertyValue('padding-left').split('p')[0] * 1
        //------------^-Distance setting----^------
        //由path設定defualt選項
        testTablist.forEach((val, idx) => { (val.path === document.URL.split(pathDomain)[1]) && (currentSelectIdx.current = idx) })
        currentPath.current = document.URL.split(pathDomain)[1]
        //建立moveBrick寬度
        setBrickWidth(UnitWidth.current)
    }
    useEffect(() => {
        initialSetting()
        //reStart setting when window changes size 
        window.addEventListener('resize', () => { initialSetting() })
        //remove event
        return () => {
            window.removeEventListener('resize')
        }
    }, [])

    const [BrickX, setBrickX] = useState(0)
    const handleTabClick = ({ idx, path }) => {
        if (!ListUnit) return
        currentSelectIdx.current = idx
        currentPath.current = path
        runOnce.current = true
        // rugular count
        let moveDis = (idx + 1) * SinglePaddingWidth.current + idx * UnitWidth.current
        //only when idx = 0 has different Dis
        if (idx === 0) {
            moveDis = SinglePaddingWidth.current
        }
        setBrickX(moveDis)

    }

    //once BrickWidth decided //setting Brick X
    useEffect(() => {
        if (BrickWidth === null || currentSelectIdx.current === null) return
        handleTabClick({ idx: currentSelectIdx.current })
    }, [BrickWidth])

    useEffect(() => {
        //null
        if (!currentSelectIdx) return
        // if (BrickX === PreBrickX.current) return
        console.log(currentPath.current)
        // window.history.push(`${pathDomain}/link`)
        // window.location.href=``

    }, [BrickX])

    return (
        <>
            <div className={classes.edgeWrapper}>
                <div className={classes.listWrapper} >
                    <ul className={classes.textList} >
                        {testTablist.map((val, idx) => {
                            return (<li
                                className={`${classes.listUnit} ${val.disabled && classes.disabled}`} key={idx + 'tab'}
                                onClick={() => val.disabled || handleTabClick({ path: val.path, idx })} ref={ListUnit}>{val.itemName}
                            </li>)
                        })}
                    </ul>
                    <div className={classes.BrickTrack}>
                        <div className={classes.Line}></div>
                        <div className={classes.moveBrick} style={{ left: `${BrickX}px`, width: `${BrickWidth}px`, transition: runOnce.current && '.2s ease' }}></div>
                    </div>
                </div>
            </div>
            <div className={classes.test}></div>
        </>
    );
};

export default Test_Tab;

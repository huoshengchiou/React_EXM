import React, { useState, useRef, useCallback } from "react";
import classes from "./style.module.scss";
import { useEffect } from "react";
// import { withRouter } from 'react-router-dom';

// { TabList, pathDomain }
const TabLv1_v2 = ({
  guide = false,
  Tablist = [],
  onClick = false,
  flagKey = "",
  flagFunc = false,
  defaultIdx = 0,
}) => {
  //TODO由自定義key建立default selection
  const deBugMode = false

  const guideMsg =
    [
      {
        TabName: "Tab1",
        id: "1",
        追加Func標記: true,
      },
      {
        TabName: "Tab2",
        disabled: true,
        id: "2",

      },
      {
        TabName: "Tab3",
        // disabled: `(default)false or true`,
        id: "3",
      },
      {
        TabName: "Tab4",
        // disabled: `(default)false or true`,
        id: "4",
      },
    ];
  //record all DOMs
  const refs = useRef([])
  //record all DOMs width
  const unitWidthMap = useRef([])
  //record single Margin width
  const SingleMarginWidth = useRef(null);
  //for resize event
  const EventListen = useRef(null);
  const runOnce = useRef(false);
  //currentSelect Item Idx and path
  const currentSelectIdx = useRef(null);
  //function switch Flag
  const switchFlag = useRef(null);
  //current event Obj //collect All info
  const currentEventObj = useRef(null);
  //render Brick width
  const [BrickWidth, setBrickWidth] = useState(null);

  //initial func setting all parameter
  const initialSetting = () => {
    //block when nothing rendered
    if (refs.current.length === 0) return
    unitWidthMap.current = refs.current.map((DOM, idx) => {

      if (idx === 2) {
        SingleMarginWidth.current =
          window
            .getComputedStyle(DOM, null)
            .getPropertyValue("margin-left")
            .split("p")[0] * 1;
      }
      return window
        .getComputedStyle(DOM, null)
        .getPropertyValue("width")
        .split("p")[0] * 1;

    })
    currentSelectIdx.current = defaultIdx
    //TODO初始值設定寬度
    // //建立moveBrick寬度
    setBrickWidth(unitWidthMap.current[currentSelectIdx.current]);
  };
  //initial setting
  useEffect(() => {
    if (Tablist.length === 0) return;
    initialSetting();
    //reStart setting when window changed
    EventListen.current = window.addEventListener("resize", initialSetting);
    //remove event
    return () => {
      window.removeEventListener("resize", EventListen.current);
    };
  }, []);


  // useEffect(() => {
  //   if (!customInitialVal) return;
  //   // console.log('觸發改變')
  //   initialSetting();
  // }, [customInitialVal]);

  //Brick move
  const [BrickX, setBrickX] = useState(0);


  //sum for width of elements
  const sumDis = (idx) => {
    let sum = 0
    if (idx === 0) return sum
    for (let i = 0; i < idx; i++) {
      sum += unitWidthMap.current[i]
    }
    return sum
  }
  const handleTabClick = ({
    idx = 0,
    feedBack = {},
  }) => {
    if (refs.current.length === 0) return;
    if (feedBack.disabled) return;

    runOnce.current = true;
    //record Obj
    currentSelectIdx.current = idx;
    //feedBack Obj
    currentEventObj.current = { ...feedBack, idx };
    switchFlag.current = feedBack[flagKey] || false;
    //same element width
    if (BrickWidth === unitWidthMap.current[currentSelectIdx.current]) {
      let moveDis = (currentSelectIdx.current * SingleMarginWidth.current + sumDis(currentSelectIdx.current))
      setBrickX(moveDis);
    }
    setBrickWidth(unitWidthMap.current[currentSelectIdx.current]);
    deBugMode && console.log('Brick寬度改變')
  };

  //Decide Brick X position
  useEffect(() => {
    if (refs.current.length === 0 || BrickWidth === null) return;
    // rugular count
    let moveDis = (currentSelectIdx.current * SingleMarginWidth.current + sumDis(currentSelectIdx.current))
    setBrickX(moveDis);
    deBugMode && console.log('校正移動')
  }, [BrickWidth]);

  // invoke after Brick move
  useEffect(() => {
    if (currentSelectIdx.current === defaultIdx && !runOnce.current) return;

    if (flagFunc && switchFlag.current) {
      flagFunc(currentEventObj.current);
      console.log("Flag", currentEventObj.current);
      return;
    }

    if (onClick) {
      onClick(currentEventObj.current);
      console.log("onClick", currentEventObj.current);
      return;
    }
  }, [BrickX]);



  return (
    <>
      {guide && console.log("guideMsg==>", guideMsg)}
      <div className={classes.edgeWrapper}>
        <div className={classes.listWrapper}>
          <ul className={classes.textList}>
            {Tablist.map((val, idx) => {
              return (
                <li
                  className={`${classes.listUnit} ${
                    val.disabled && classes.disabled
                    }`}
                  key={idx + "tab"}
                  ref={ref => { refs.current[idx] = ref }}
                  onClick={() =>
                    val.disabled ||
                    handleTabClick({
                      idx,
                      feedBack: val,
                    })
                  }
                >
                  {val.TabName}
                </li>

              );
            })}
          </ul>
          {/* --------------v--move Brick-----v------------ */}
          <div className={classes.BrickTrack}>
            <div className={classes.Line}></div>
            <div
              className={classes.moveBrick}
              style={{
                left: `${BrickX}px`,
                width: `${BrickWidth}px`,
              }}
            ></div>
          </div>
          {/* --------------^--move Brick-----^------------ */}
        </div>
      </div>
      <div className={classes.test}></div>
    </>
  );
};

export default TabLv1_v2;

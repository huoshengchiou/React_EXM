import React, { useState, useRef, useCallback } from "react";
import classes from "./style.module.scss";
import { useEffect } from "react";
// import { withRouter } from 'react-router-dom';

// { TabList, pathDomain }
const TabLv1_v2 = ({
  guide = false,
  fakeURL = "",
  Tablist = [],
  pathDomain = "",
  onClick = false,
  customKey,
  customInitialVal = "",
  flagKey = "",
  flagFunc = false,
  defaultIdx = 0,
}) => {
  //TODO由自定義key建立default selection
  // const customKey = 'key'
  // const customInitialVal = 0

  // Tablist without disabled ok

  const guideMsg = {
    StateModeList: [
      {
        TabName: "StateTab1",
        disabled: `(default)false or true`,
        customKey: "num1",
      },
      {
        TabName: "StateTab2",
        disabled: `(default)false or true`,
        customKey: "num2",
      },
    ],
    PathModeList: [
      {
        TabName: "PathTab1",
        path: "/Path",
        disabled: `(default)false or true`,
      },
      {
        TabName: "PathTab2",
        path: "/Path",
        disabled: `(default)false or true`,
      },
    ],
  };
  //generate ListUnit DOM and its width
  const ListUnit = useRef(null);
  const UnitWidth = useRef(null);
  //defult URL
  const OriginalPath = useRef(fakeURL || window.location.href);
  //for resize event
  const EventListen = useRef(null);
  const runOnce = useRef(false);
  //currentSelect Item Idx and path
  const currentSelectIdx = useRef(null);
  const preSelectIdx = useRef(null)
  const currentPath = useRef(null);
  const currentVal = useRef(null);

  //ListUnit single Margin width
  const SingleMarginWidth = useRef(null);
  //render Brick width
  const [BrickWidth, setBrickWidth] = useState(null);
  //function switch Flag
  const switchFlag = useRef(null);
  //current event Obj //collect All info
  const currentEventObj = useRef(null);

  //initial func setting all parameter
  const initialSetting = () => {
    //block when nothing rendered
    if (!ListUnit.current) return;
    //------------v-Distance setting----v------
    UnitWidth.current =
      window
        .getComputedStyle(ListUnit.current, null)
        .getPropertyValue("width")
        .split("p")[0] * 1;
    SingleMarginWidth.current =
      window
        .getComputedStyle(ListUnit.current, null)
        .getPropertyValue("margin-left")
        .split("p")[0] * 1;
    //------------^-Distance setting----^------

    //建立moveBrick寬度
    setBrickWidth(UnitWidth.current);
  };
  useEffect(() => {
    if (Tablist.length === 0) return;
    initialSetting();
    //reStart setting when window changes size
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

  const [BrickX, setBrickX] = useState(0);
  const handleTabClick = ({
    idx = 0,
    feedBack = {},
    event,
  }) => {
    if (!ListUnit.current) return;
    console.log('校正')
    //record Obj
    currentSelectIdx.current = `${idx}`;
    currentEventObj.current = { ...feedBack, idx, event };
    // currentPath.current = feedBack.path;
    // if (onClick) currentVal.current = customVal;
    switchFlag.current = feedBack[flagKey] || false;
    // rugular count
    let moveDis = idx * (SingleMarginWidth.current + UnitWidth.current);
    // let moveDis = (idx + 1) * SingleMarginWidth.current + idx * UnitWidth.current
    setBrickX(moveDis);
  };

  //Decide Brick X position
  useEffect(() => {
    if (!ListUnit.current || BrickWidth === null) return;
    console.log('發動')
    //find initial idx
    // if (onClick) {
    //   currentVal.current = customInitialVal;
    //   Tablist.forEach((val, idx) => {
    //     val[customKey] === customInitialVal && (currentSelectIdx.current = idx);
    //   });
    // } else {
    //   //由path設定defualt選項
    //   Tablist.forEach((val, idx) => {
    //     val.path === document.URL.split(pathDomain)[1] &&
    //       (currentSelectIdx.current = idx);
    //   });
    //   if (fakeURL)
    //     Tablist.forEach((val, idx) => {
    //       val.path === fakeURL.split(pathDomain)[1] &&
    //         (currentSelectIdx.current = idx);
    //     });
    //   currentPath.current = fakeURL
    //     ? fakeURL.split(pathDomain)[1]
    //     : document.URL.split(pathDomain)[1];
    // }
    handleTabClick({
      idx: defaultIdx,
    });
  }, [BrickWidth]);

  // invoke after Brick move
  useEffect(() => {
    //null mute
    if (!currentSelectIdx.current || !runOnce.current) return;
    //idx選擇一致 mute
    if (preSelectIdx.current === currentSelectIdx.current) return
    preSelectIdx.current = currentSelectIdx.current
    // currentSelectIdx.current
    // console.log(
    //   "flagFunc && switchFlag.current",
    //   flagFunc && switchFlag.current
    // );
    if (flagFunc && switchFlag.current) {
      flagFunc(currentEventObj.current);
      console.log("Flag", currentEventObj.current);
      runOnce.current = true;
      return;
    }

    if (onClick) {
      onClick(currentEventObj.current);
      console.log("onClick", currentEventObj.current);
      runOnce.current = true;
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
                  ref={ListUnit}
                  onClick={(e) =>
                    val.disabled ||
                    handleTabClick({
                      event: e,
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

import React, { useState, useRef, useEffect } from "react";
import CSStest from "./CSStest";
import BattleCard from "./BattleCard";
// import AnimateCard from "./AnimateCard";
// import Banner from "./Banner";
// import Rxjs_main from "./Rxjs_main";
// import Test_memo from "./Test_memo";
// import Test_scroll from "./Test_scroll";
// import Test_callback from "./Test_callback";
// import Test_customerhook from "./Test_customerhook";
// import Test_carousel from "./Test_carousel";
// import Test_Tab from "./Test_Tab";
// import TryUseState from "./hook_play/TryUseState";
// import TryUseReduce from "./hook_play/TryUseReduce";
// import DemoHook from "./DemoHook";
// import Test_listarr from "./Test_listarr";
// import TestReturn from "./TestReturn";
// import HOC from "./TestHOC";
// import Component1 from "./TestHOC/Component1";
// import Component2 from "./TestHOC/Component2";
// import HOCC from "./HOCC";
// import TryUseReduce2 from "./hook_play/TryUseReduce2";
// import TabLv1_v2 from "../src/TabLv1_v2";
// import TabLv1_v2_EX from "../src/TabLv1_v2_EX";
// import Timertest from "../src/Timertest";
// import InputImg from "../src/InputImg";
// import TestBlob from "../src/TestBlob";
// import ClassComponent from "../src/ClassComponent";
// import DragTest from "../src/DragTest";
// import Imglazy from "../src/Imglazy";
// import GridCSS from "./GridCSS";
// import ContextReducer from "./ContextReducer";
// import DIS_performance from "./DIS_performance";
// import TestHybird from "./TestHybird";
// import CssLoader from "./CssLoader";
// import EdProject from "../src/EdProject";
// import IfinityScroll from "../src/IfinityScroll";
import { useScrollFetch } from "./IfinityScroll/useScrollFetch";
// import MouseClick from "./MouseClick";
// import Invite from "./Invite";
import DragTwo from "./DragTwo";
// import AsyncPlay from "./AsyncPlay";
import TestRxjs from "./TestRxjs";
import Battle from "./Battle";

const ImgLoader = (src) => {
  const [loaded, setLoaded] = useState(false);
  // const refImg = useRef(
  //   <img src={src} alt="" onLoad={() => setLoaded(true)} />
  // );
  const refImg = useRef(null);
  useEffect(() => {
    console.log(refImg.current);
  }, []);
  return (
    <>
      <img ref={refImg} src={src} alt="" onLoad={() => setLoaded(true)} />
    </>
  );
};

const ExternalImage = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <img
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        src={props.src}
        alt={props.alt}
        {...props}
      />
      {/* {!loaded && "正在跑"} */}
    </>
  );
};

function App() {
  //inject new props
  // const EnhanceComponent = HOC(Component1, Component2);
  // const { setGoFetch } = useScrollFetch({});
  // const list = [
  //   {
  //     TabName: "StateTab1121212",
  //     disabled: true,
  //     customKey: "num1",
  //     otherFunc: true,
  //   },
  //   {
  //     TabName: "StateTab2212",
  //     // disabled: `(default)false or true`,
  //     customKey: "num2",
  //   },
  //   {
  //     TabName: "StateTab3",
  //     // disabled: `(default)false or true`,
  //     customKey: "num3",
  //   },
  //   {
  //     TabName: "StateTab4",
  //     customKey: "num4",
  //   },
  //   {
  //     TabName: "StateTab5",
  //     customKey: "num5",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "StateTab6kokokokokokok",
  //     customKey: "num6",
  //   },
  //   {
  //     TabName: "我是最後一個",
  //     customKey: "num6",
  //   },
  // ];
  // const [arr, setArr] = useState(list);
  // const [current, setCurrent] = useState("num1");

  // const myFunc = () => {
  //   console.log("invoke my Func");
  // };
  // const handleIncreaseArr = () => {
  //   setArr((pre) => [
  //     ...pre,
  //     {
  //       TabName: "last",
  //       customKey: "num6",
  //     },
  //   ]);
  // };

  const range = (start, stop) =>
    new Array(stop - start + 1).fill(0).map((val, idx) => start + idx);
  const [val, setVal] = useState("");

  const keyMap = {
    backspace: 8,
    neg: 189,
    pos: 187,
    dot: 190,
    num: range(48, 57),
    e: 69,
  };

  const keyarr = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8];

  const modeMap = {
    pInt: [...keyMap.num, keyMap.backspace],
  };

  const modeMapFac = (type) => {
    switch (type) {
      case "pInt":
        return [...keyMap.num, keyMap.backspace];
      case "number":
        return [];
      default:
        return [];
    }
  };

  const handleNumber = (e, modeMap) => {
    console.log(e.keyCode);
    if (!modeMap.find((x) => x === e.keyCode)) {
      e.preventDefault();
    }
  };

  const type = "number";

  return (
    <>
      {/* <Rxjs_main /> */}
      {/* <Banner /> */}
      {/* <Test_memo /> */}
      {/* <Banner /> */}
      {/* <Test_customerhook /> */}
      {/* <Test_carousel /> */}
      {/* <Test_callback /> */}
      {/* <Test_scroll /> */}
      {/* <TryUseState />
      <TryUseReduce /> */}
      {/* <TestReturn /> */}
      {/* <Test_listarr /> */}
      {/* <Test_Tab /> */}
      {/* <hr />
      <DemoHook />
      <hr /> */}
      {/* <div style={{ background: "black" }}>
        <TabLv1_v2_EX
          Tablist={list}
          customKey="customKey"
          customInitialVal="num1"
          onClick={setCurrent}
          flagKey="otherFunc"
          flagFunc={myFunc}
          defaultIdx={2}
        />
      </div>
      {/* <Timertest /> */}
      {/* <EnhanceComponent /> */}
      {/* <HOCC /> */}
      {/* <TryUseReduce /> */}
      {/* <TryUseReduce2 /> */}
      {/* <InputImg /> */}
      {/* <TestBlob /> */}
      {/* <ClassComponent/> */}
      {/* <DragTest /> */}
      {/* <Imglazy/> */}
      {/* <AnimateCard/> */}
      {/* <GridCSS /> */}
      {/* <ContextReducer /> */}
      {/* <DIS_performance /> */}
      {/* <TestHybird /> */}
      {/* <CssLoader /> */}
      {/* <TestHybird />
      <ClassComponent />
      <EdProject /> */}
      {/* <ClassComponent />
      <EdProject /> */}
      {/* <button onClick={handleIncreaseArr}>test</button> */}
      {/* <IfinityScroll refreshFunc={handleIncreaseArr}>
        {arr.map((val, idx) => (
          <div key={idx + "de"} style={{ fontSize: "40px" }}>
            {val.TabName}
          </div>
        ))}
      </IfinityScroll>
      <MouseClick /> */}
      {/* <Invite /> */}
      {/* <AsyncPlay /> */}
      {/* <DragTwo /> */}
      <CSStest />
      <TestRxjs />
      <input
        type={type}
        value={val}
        onKeyDown={(e) => console.log(e.keyCode)}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <Battle />
      <img
        src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
        alt=""
      />
      <ImgLoader src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
      <ExternalImage src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
      {/* <CSStest /> */}
      <BattleCard />
    </>
  );
}

export default App;

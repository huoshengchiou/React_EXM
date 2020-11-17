import React, { useState } from "react";
import AnimateCard from "./AnimateCard";
import Banner from "./Banner";
import Rxjs_main from "./Rxjs_main";
import Test_memo from "./Test_memo";
import Test_scroll from "./Test_scroll";
import Test_callback from "./Test_callback";
import Test_customerhook from "./Test_customerhook";
import Test_carousel from "./Test_carousel";
import Test_Tab from "./Test_Tab";
import TryUseState from "./hook_play/TryUseState";
import TryUseReduce from "./hook_play/TryUseReduce";
import DemoHook from "./DemoHook";
import Test_listarr from "./Test_listarr";
import TestReturn from "./TestReturn";
import HOC from "./TestHOC";
import Component1 from "./TestHOC/Component1";
import Component2 from "./TestHOC/Component2";
import HOCC from "./HOCC";
import TryUseReduce2 from "./hook_play/TryUseReduce2";
import TabLv1_v2 from "../src/TabLv1_v2";
import TabLv1_v2_EX from "../src/TabLv1_v2_EX";
import Timertest from "../src/Timertest";
import InputImg from "../src/InputImg";
import TestBlob from "../src/TestBlob";
import ClassComponent from "../src/ClassComponent";
import DragTest from "../src/DragTest";
import Imglazy from "../src/Imglazy";
import GridCSS from "./GridCSS";
import ContextReducer from "./ContextReducer";
import DIS_performance from "./DIS_performance";
import TestHybird from "./TestHybird";
import CssLoader from "./CssLoader";
import EdProject from "../src/EdProject";
import IfinityScroll from "../src/IfinityScroll";
import { useScrollFetch } from "./IfinityScroll/useScrollFetch";
import MouseClick from "./MouseClick";

function App() {
  //inject new props
  const EnhanceComponent = HOC(Component1, Component2);
  const { setGoFetch } = useScrollFetch({});
  const list = [
    {
      TabName: "StateTab1121212",
      disabled: true,
      customKey: "num1",
      otherFunc: true,
    },
    {
      TabName: "StateTab2212",
      // disabled: `(default)false or true`,
      customKey: "num2",
    },
    {
      TabName: "StateTab3",
      // disabled: `(default)false or true`,
      customKey: "num3",
    },
    {
      TabName: "StateTab4",
      customKey: "num4",
    },
    {
      TabName: "StateTab5",
      customKey: "num5",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "StateTab6kokokokokokok",
      customKey: "num6",
    },
    {
      TabName: "我是最後一個",
      customKey: "num6",
    },
  ];
  const [arr, setArr] = useState(list);
  const [current, setCurrent] = useState("num1");

  const myFunc = () => {
    console.log("invoke my Func");
  };
  const handleIncreaseArr = () => {
    setArr((pre) => [
      ...pre,
      {
        TabName: "last",
        customKey: "num6",
      },
    ]);
  };
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
      {/* < DragTest/> */}
      {/* <Imglazy/> */}
      {/* <AnimateCard/> */}
      {/* <GridCSS /> */}
      {/* <ContextReducer /> */}
      {/* <DIS_performance /> */}
      {/* <TestHybird /> */}
      <CssLoader />
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
    </>
  );
}

export default App;

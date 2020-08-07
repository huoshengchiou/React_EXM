import React from "react";

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
import Test_listarr from './Test_listarr'
import TestReturn from './TestReturn'
import HOC from './TestHOC'
import Component1 from './TestHOC/Component1'
import Component2 from './TestHOC/Component2'
import HOCC from './HOCC'


function App() {
  //inject new props
  const EnhanceComponent = HOC(Component1, Component2)


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
      <DemoHook />
      <hr />
      <EnhanceComponent />
      <HOCC />
    </>
  );
}

export default App;

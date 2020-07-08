import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

export default function Testspelement() {
  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: "#ffaaee", fontSize: "200px" });
      await next({ opacity: 0, color: "rgb(14,26,19)" });
    },
    from: { opacity: 0, color: "red", fontSize: "60px" },
  });
  // ...
  const props1 = { color: "black" };
  const [trunon, setTrunon] = useState(false);

  const props2 = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "0%",
      height: "0%",
      background: "lightgreen",
    },
    to: async (next) => {
      while (1) {
        await next({
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
          background: "lightblue",
        });
        await next({ height: "50%", background: "lightgreen" });
        await next({
          width: "50%",
          left: "50%",
          background: "lightgoldenrodyellow",
        });
        await next({ top: "0%", height: "100%", background: "lightpink" });
        await next({ top: "50%", height: "50%", background: "lightsalmon" });
        await next({ width: "100%", left: "0%", background: "lightcoral" });
        await next({ width: "50%", background: "lightseagreen" });
        await next({ top: "0%", height: "100%", background: "lightskyblue" });
        await next({ width: "100%", background: "lightslategrey" });
      }
    },
  });

  const props3 = useSpring({
    // from
  });

  return (
    <>
      <animated.div style={trunon ? props : props1}>
        <h1>I will fade in and out</h1>
      </animated.div>

      {/* spring必須在animated的容器內執行 */}
      <div style={{ width: "100vw", height: "50vh" }}>
        <animated.div style={props2}>
          <p>123</p>
        </animated.div>
      </div>

      <h1 style={trunon ? props : props1}>1234</h1>

      <button
        onClick={() => {
          setTrunon(!trunon);
        }}
      >
        1234
      </button>
      <div style={{ width: "300px", height: "300px", background: "teal" }}>
        {/* 在animation內層div吃不到inline CSS */}
        <div style={{ width: "100%", height: "100%", background: "red" }}></div>
        <animated.div></animated.div>
      </div>

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => <div style={props}>hello</div>}
      </Spring>
    </>
  );
}

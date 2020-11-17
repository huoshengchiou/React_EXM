import React from "react";

function MouseClick() {
  return (
    <>
      <div
        style={{ width: "400px", height: "400px", background: "lightblue" }}
        onClick={(e) => console.log("外層")}
      >
        <div
          style={{ width: "200px", height: "200px", background: "lightgreen" }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("內層");
          }}
        ></div>
      </div>
    </>
  );
}

export default MouseClick;

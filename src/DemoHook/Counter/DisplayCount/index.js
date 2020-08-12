import React from "react";

function DisplayCount({ count }) {

  console.log('DisplayCount render')
  return (
    <>
      <h3>{count}</h3>
    </>
  );
}

export default DisplayCount;

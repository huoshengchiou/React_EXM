import React from "react";

function Display({ count, id }) {
  // console.log(`Display count${count && count} id${id && id} run`);
  return (
    <>
      <h3>{count}</h3>
      <h2>{id}</h2>
    </>
  );
}

export default Display;

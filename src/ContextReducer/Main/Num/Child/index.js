import React, { useEffect, useState } from "react";

const test = () => {
  console.log("here");
};

function Child({ updateNum }) {
  const [render, setRender] = useState(0);

  useEffect(() => {
    console.log("child render");
    setRender(updateNum());
  }, [updateNum]);
  return (
    <>
      <div>{render}</div>
    </>
  );
}

export default Child;

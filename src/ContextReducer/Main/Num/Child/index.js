import React, { useEffect, useState } from "react";

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

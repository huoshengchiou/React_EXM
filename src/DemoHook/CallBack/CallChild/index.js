import React, { useEffect, useState } from "react";

function CallChild({ getNum }) {
  console.log("CallChild render");

  const [render, setRender] = useState(0);


  useEffect(() => {
    console.log("CallChild useEffect 觸發改變");
    setRender(getNum());
  }, [getNum]);
  return (
    <>
      <h3>
        num{"=>"}
        {render}
      </h3>
    </>
  );
}

export default CallChild;

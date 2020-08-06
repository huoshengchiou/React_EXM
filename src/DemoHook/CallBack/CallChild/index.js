import React, { useEffect, useState } from "react";

function CallChild({ getNum }) {
  const [render, setRender] = useState(0);
  useEffect(() => {
    console.log("觸發改變");
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

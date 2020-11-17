import React, { useCallback, useRef } from "react";

function IfinityScroll({
  //main data
  children: renderList = null,
  Fetching = false,
  hasMoreData = false,
  loadingPlaceHolder,
  refreshFunc,
}) {
  const eventObserver = useRef(null);
  const lastElement = useCallback(
    (node) => {
      if (eventObserver.current) eventObserver.current.disconnect();
      eventObserver.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMoreData) {
          refreshFunc();
        }
      });
      if (node) eventObserver.current.observe(node);
    },
    [Fetching, hasMoreData, renderList, refreshFunc]
  );
  if (!renderList) return null;
  return (
    <>
      {/* {renderList.map((val, idx) =>
        renderList.length === idx + 1 ? { ...val, ref: lastElement } : val
      )} */}
      {renderList}
      {/* 不是由資料面控制的最後元素 */}
      <div ref={lastElement}></div>
      {Fetching && loadingPlaceHolder}
    </>
  );
}

export default IfinityScroll;

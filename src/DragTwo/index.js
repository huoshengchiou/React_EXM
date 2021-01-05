import React, { useState, useRef, useEffect } from "react";
import { senseError, senseError2 } from "../mapError";
import classes from "./style.module.scss";

const data = [
  { title: "group1", items: ["1", "2", "3"] },
  { title: "group2", items: ["4", "5"] },
  { title: "group3", items: ["6", "7"] },
];

//sample res

const res = {
  status: 200,
  data: {
    header: { status: "1234" },
    body: { show: "res OK" },
  },
};

const fakeAPI = (senseError, setRenderErr) => {
  setTimeout(() => {
    // senseError(res, setRenderErr, () => {
    //   console.log("ok");
    // });
    senseError2(
      res,
      (payload) => {
        console.log(payload);
      },
      (err) => {
        setRenderErr(err);
      }
    );
  }, 5000);
};

const DragNDrop = ({ data }) => {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [renderErr, setRenderErr] = useState(null);
  const dragRef = useRef();
  const dragNodeRef = useRef();

  const handleDragEnd = () => {
    console.log("end");
    dragNodeRef.current.removeEventListener("dragend", handleDragEnd);
    dragRef.current = null;
    dragNodeRef.current = null;
    setDragging(false);
  };
  const handleDragStart = (e, params) => {
    console.log("drag", params);
    //record data pos
    dragRef.current = params;
    dragNodeRef.current = e.target;
    dragNodeRef.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    console.log("params", params);
    const cerrentItem = dragRef.current;
    if (e.target !== dragNodeRef.current) {
      console.log("target not");
      setList((oldList) => {
        //grap old list deep
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.grpI].items.splice(
          params.itemI,
          0,
          newList[cerrentItem.grpI].items.splice(cerrentItem.itemI, 1)[0]
        );
        dragRef.current = params;
        return newList;
      });
    }
  };

  const getStyle = (params) => {
    const currentItem = dragRef.current;
    if (
      currentItem.grpI === params.grpI &&
      currentItem.itemI === params.itemI
    ) {
      return classes.currentDndItem;
    }
    return "";
  };

  useEffect(() => {
    fakeAPI(senseError, setRenderErr);
  }, []);

  return (
    <>
      {renderErr}
      {list.map((grp, grpI) => (
        <div
          className={classes.dndGroup}
          key={grpI}
          onDragEnter={
            dragging && !grp.items.length
              ? (e) => handleDragEnter(e, { grpI, itemI: 0 })
              : null
          }
        >
          <div>{grp.title}</div>
          {grp.items.map((item, itemI) => (
            <div
              draggable="true"
              className={`${dragging && getStyle({ grpI, itemI })} ${
                classes.dndItem
              }`}
              key={grpI + itemI}
              //只有dragging啟動時才允許enter
              onDragEnter={
                dragging
                  ? (e) => {
                      handleDragEnter(e, { grpI, itemI });
                    }
                  : null
              }
              onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
            >
              <div key={itemI}>
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

const DragTwo = () => {
  return (
    <>
      <div className={classes.appHeader}>
        <div className={classes.dragNdrop}>
          <DragNDrop data={data} />
        </div>
      </div>
    </>
  );
};

export default DragTwo;

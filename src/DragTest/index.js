import React, { useEffect, useRef } from "react";
import classes from "./style.module.scss";

const Card = (props) => {
  const { id, className, draggable } = props;
  const dragStart = (e) => {
    e.dataTransfer.setData("card_id", e.target.id);

    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        id={id}
        className={className}
        draggable={draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
      >
        {props.children}
      </div>
    </>
  );
};

const Board = (props) => {
  const { card_id, id, className } = props;
  const drop = (e) => {
    e.preventDefault();
    const dragDOM = document.querySelector(card_id);
    card_id.style.display = "block";
    // e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div id={id} onDrop={drop} onDragOver={dragOver} className={className}>
        {props.children}
      </div>
    </>
  );
};

const DragTest = () => {
  const domRef = useRef(null);

  useEffect(() => {
    // domRef.current = document.querySelector(".fill");
    domRef.current.addEventListener("dragstart", () => {
      console.log("start");
    });
    domRef.current.addEventListener("dragend", () => {
      console.log("end");
    });
    console.log("domRef.current", domRef.current);
  }, []);

  return (
    <>
      <div className={classes.container}>
        <Board id="board-1" className={classes.board}>
          <Card id="card-1" className={classes.card} draggable="true">
            <p>card one</p>
          </Card>
        </Board>
        <Board id="board-2" className={classes.board}>
          <Card id="card-2" className={classes.card} draggable="true">
            <p>card two</p>
          </Card>
        </Board>
        <custom-tag> 自定義tag </custom-tag>
      </div>
      <section className={classes.section2}>
        <div className={classes.empty}>
          <div className={classes.fill} ref={domRef} draggable="true"></div>
        </div>
        <div className={classes.empty}></div>
        <div className={classes.empty}></div>
        <div className={classes.empty}></div>
        <div className={classes.empty}></div>
      </section>
    </>
  );
};

export default DragTest;

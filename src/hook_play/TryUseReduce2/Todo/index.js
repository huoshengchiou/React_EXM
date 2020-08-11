import React from "react";
import { ACTIONS } from "../../TryUseReduce2";

function Todo({ todo, dispatch }) {
  return (
    <>
      <div>
        <span style={{ color: todo.complete ? "green" : "red" }}>
          {todo.name}
        </span>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
          }}
        >
          toggle
        </button>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } });
          }}
        >
          delete
        </button>
      </div>
    </>
  );
}

export default Todo;

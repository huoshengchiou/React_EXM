import React, { useReducer, useState } from "react";
import Todo from "./Todo";
export const ACTIONS = {
  ADD_NEW_TODO: "addNewTodo",
  TOGGLE_TODO: "toggleTodo",
  DELETE: "delete",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_NEW_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

function TryUseReduce2() {
  // 對稱
  // 對一個object進行增修刪減
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    // 利用action obj挾帶相關的參數進入reducer 進行狀態編輯
    dispatch({ type: ACTIONS.ADD_NEW_TODO, payload: { name: name } });
    setName("");
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSub}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default TryUseReduce2;

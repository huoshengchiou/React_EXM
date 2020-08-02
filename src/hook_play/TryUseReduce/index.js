import React, { useReducer, useState } from "react";

const ACTION = {
  ADD_TODO: "add-todo",
};
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(todos)];
  }
};

const newTodo = (name) => {
  return { id: Date.now(), name, complete: false };
};

function TryUseReduce() {
  const [todo, dispatch] = useReducer(reducer, []);
  const [rendername, setRendername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { name: e.target.name } });
    setRendername("");
  }
  return (
    <>
      <div>Use reduce</div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={""} id="" onChange={(e) => console.log(e)} />
      </form>
    </>
  );
}

export default TryUseReduce;

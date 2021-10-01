import React from "react";
import TodoElement from "../todo-element/TodoElement";
import "./Todo.css";

function ToDo({ todos, setTodos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <TodoElement todos={todos} setTodos= {setTodos} filteredTodos={filteredTodos} />
      </ul>
    </div>
  );
}

export default ToDo;

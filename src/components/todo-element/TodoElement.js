import React from "react";
import "./TodoElement.css";

function TodoElement({ todos, setTodos }) {
  return (
    <div className="todo">
      {todos.map((todo) => {
        const deleteHandler = () => {
          setTodos(todos.filter((element) => element.id !== todo.id));
        };

        const completeHanbler = () => {
          setTodos(
            todos.map((item) => {
              if (item.id === todo.id) {
                return { ...item, completed: !item.completed };
              }
              console.log(todos);
              return item;
            })
          );
        };

        if (todo.text !== "") {
          return (
            <li
              className={`todo-item ${todo.completed ? "completed" : ""}`}
              key={todo.id}
              todo={todo}
            >
              <span>{todo.text}</span>
              <button className="complete-btn" onClick={completeHanbler}>
                <i className="fas fa-check"></i>
              </button>
              <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
              </button>
            </li>
          );
        }
      })}
    </div>
  );
}

export default TodoElement;

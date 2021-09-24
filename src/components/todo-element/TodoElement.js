import React from "react";

function TodoElement({ todos, setTodos }) {
  return (
    <div className="todo">
      {todos.map((element,index) => {
        const removeElement = (index) => {
          setTodos(todos.splice(index + 1, 1));


        }
        if (element.text !== '') {
          return (
            <li className="todo-item" key={element.id}>
              {element.text}
              <button className="complete-btn">
                <i className="fas fa-check"></i>
              </button>
              <button className="trash-btn" onClick={() => {removeElement(index)}}>
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

import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ToDo from "./components/todo/ToDo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {
    getLocalTodos();  
    
  }, []);
  
  
  useEffect(() => {
    saveLocalTodos();
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        console.log("feras");
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    
      localStorage.setItem('todos', JSON.stringify(todos))
    
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <div className="app-wrapper">
        <header>Todos Notepad</header>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <div>
          <ToDo todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;

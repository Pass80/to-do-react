import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import ToDo from "./components/todo/ToDo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className="app-wrapper">
        <header>Todos Notepad</header>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
        <div>
          <ToDo todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;

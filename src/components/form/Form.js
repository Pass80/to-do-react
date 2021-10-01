import React from "react";
import "./Form.css";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    return setInputText(e.target.value);
  };

  const submitInputTextHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="console" onSubmit={submitInputTextHandler}>
      <input
        className="text"
        placeholder="write to do"
        value={inputText}
        onChange={inputTextHandler}
      />
      <button type="submit" onClick={submitInputTextHandler}>
        Add
      </button>
      <select className="select" onChange={statusHandler}>
        <option>all</option>
        <option>Completed</option>
        <option>Uncompleted</option>
      </select>
    </form>
  );
}

export default Form;

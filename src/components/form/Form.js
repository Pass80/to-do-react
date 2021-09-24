import React from "react";
import "./Form.css";

function Form({ inputText, setInputText, todos, setTodos }) {
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
      <select>
        <option>All tasks</option>
        <option>completed</option>
        <option>uncompleted</option>
      </select>
    </form>
  );
}

export default Form;

import React, { useState } from "react";
import "../node_modules/bulma/css/bulma.css";
import "../src/App.css";

function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim()) {
      addTodo && addTodo(text.trim());

      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input is-info,input is-small"
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter a new ToDo"
      />
      <button
        className="button is-success  button is-small "
        id="btn"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;

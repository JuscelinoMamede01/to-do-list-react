import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../node_modules/bulma/css/bulma.css";
import "../src/App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
      id: Math.random(),
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((itemTodo) =>
      itemTodo.id === id
        ? { ...itemTodo, completed: !itemTodo.completed }
        : itemTodo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((itemTodo) => itemTodo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="box">
      <h1 className="title is-2 is-spaced">To-Do List</h1>
      <div className="bottomContent">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;

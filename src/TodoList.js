import React from "react";
import TodoItem from "./TodoItem";
import "../node_modules/bulma/css/bulma.css";
import "../src/App.css";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="ListItems">
      {todos.map((todo) => (
        <TodoItem
          itemKey={todo.id}
          itemTodo={todo}
          itemToggleTodo={toggleTodo}
          itemDeleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

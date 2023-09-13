import React from "react";
import "../node_modules/bulma/css/bulma.css";
import "../src/App.css";

function TodoItem({ itemTodo, itemToggleTodo, itemDeleteTodo }) {
  const handleToggleTodo = () => {
    itemToggleTodo && itemToggleTodo(itemTodo.id);
  };

  const handleDeleteTodo = () => {
    itemDeleteTodo && itemDeleteTodo(itemTodo.id);
  };

  return (
    <div className="ItemContent">
      <li className="items">
        <input
          className="checkbox "
          type="checkbox"
          checked={itemTodo.completed}
          onChange={handleToggleTodo}
        />
        <span
          className="textList ,  has-text-black"
          style={{
            textDecoration: itemTodo.completed ? "line-through" : "none",
          }}
        >
          {itemTodo.text}
        </span>
      </li>

      <button className="delete" onClick={handleDeleteTodo}></button>
    </div>
  );
}

export default TodoItem;

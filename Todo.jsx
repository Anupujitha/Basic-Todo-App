import React from "react";
function Todo({ todos, index, delTodo }) {
  return (
    <div className="todo">
      <p>{todos}</p>
      <div className="actions">
        <input type="checkbox"></input>
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;

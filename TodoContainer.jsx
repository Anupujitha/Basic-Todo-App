import React from "react";
import Todo from "./Todo";
function TodoContainer({ todos, index, delTodo }) {
  return (
    <div className="input">
      {todos.map((todo, index) => (
        <Todo todos={todo} index={index} delTodo={delTodo} />
      ))}
    </div>
  );
}

export default TodoContainer;

import React, { useState } from "react";

function Inputcontainer({ Inputval, writeTodo, addTodo }) {
  return (
    <div>
      <h1>To Do list</h1>
      <div className="text-container">
        <input type="text" onChange={writeTodo} value={Inputval}></input>
        <button onClick={addTodo}>+</button>
      </div>
    </div>
  );
}

export default Inputcontainer;

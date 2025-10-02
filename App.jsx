import React, { useState } from "react";
import Inputcontainer from "./components/Inputcontainer";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [Inputval, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  function writeTodo(e) {
    setValue(e.target.value);
  }
  function addTodo() {
    if (Inputval != "") {
      setTodos((pastval) => [...pastval, Inputval]);
      setValue("");
    }
  }
  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((_, index) => index !== todoIndex)
    );
  }
  return (
    <main>
      <Inputcontainer
        Inputval={Inputval}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer todos={todos} delTodo={delTodo} />
    </main>
  );
}

export default App;

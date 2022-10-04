import React from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoSearch } from "./components/ToDoSearch";

function App() {
  const toDos = [
    { task: "Hacer la comida", done: false },
    { task: "Estudiar React", done: false },
    { task: "Hacer ejercicio", done: false },
  ];
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDos.map((toDo) => (
          <ToDoItem task={toDo.task} key={toDo.task} />
        ))}
      </ToDoList>
    </>
  );
}

export default App;

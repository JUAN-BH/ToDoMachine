import React, { useState } from "react";
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { ToDoSearch } from "./components/ToDoSearch";

function App() {
  let tasksSaved = JSON.parse(localStorage.getItem("taks"));
  if (!Array.isArray(tasksSaved)) {
    tasksSaved = [];
    localStorage.setItem("taks", JSON.stringify(tasksSaved));
  }

  const [tasksList, setTasksList] = useState(tasksSaved);

  return (
    <>
      <ToDoCounter tasksList={tasksList} />
      <ToDoSearch tasksList={tasksList} setTasksList={setTasksList} />
      <ToDoList tasksList={tasksList} setTasksList={setTasksList}>
        {tasksList.map((task) => (
          <ToDoItem
            task={task.task}
            taskId={task.id}
            taskDone={task.done}
            tasksList={tasksList}
            setTasksList={setTasksList}
            key={task.id}
          />
        ))}
      </ToDoList>
    </>
  );
}

export default App;

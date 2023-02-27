import React, { useState } from "react";
import { ToDoHeader } from "../../components/ToDoHeader";
import { ToDoCounter } from "../../components/ToDoCounter";
import { ToDoList } from "../../components/ToDoList";
import { ToDoItem } from "../../components/ToDoItem";
import { ToDoSearch } from "../../components/ToDoSearch";
import { Modal } from "../../components/Modal";
import { NotFound } from "../../components/NotFound";
import { EmptyTasks } from "../../components/EmptyTasks";
import { useTasks } from "../../utils/useTasks";
import { ChangeAlertWithStorageListener } from "../../components/ChangeAlert";

function HomePage() {
  const {
    tasksList,
    tasksLeftCounter,
    tasksDoneCounter,
    tasksDone,
    tasksLeft,
    tasksTotal,
    taskSearched,
    searchTasks,
    setTasksSearched,
    doneTask,
    deleteTask,
  } = useTasks();
  return (
    <>
      <ToDoHeader>
        <ToDoCounter
          tasksLeftCounter={tasksLeftCounter}
          tasksDoneCounter={tasksDoneCounter}
          tasksDone={tasksDone}
          tasksLeft={tasksLeft}
          tasksList={tasksList}
        />
        <ToDoSearch setTasksSearched={setTasksSearched} />
      </ToDoHeader>

      <ToDoList
        searchTasks={searchTasks}
        tasksTotal={tasksTotal}
        onNotFound={() => <NotFound taskSearched={taskSearched} />}
        onEmpty={() => <EmptyTasks />}
        render={(task) => (
          <ToDoItem
            key={task.id}
            task={task.task}
            taskId={task.id}
            taskDone={task.done}
            doneTask={doneTask}
            deleteTask={deleteTask}
          />
        )}
      >
        {(task) => (
          <ToDoItem
            key={task.id}
            task={task.task}
            taskId={task.id}
            taskDone={task.done}
            doneTask={doneTask}
            deleteTask={deleteTask}
          />
        )}
      </ToDoList>
      <ChangeAlertWithStorageListener />
    </>
  );
}

export default HomePage;

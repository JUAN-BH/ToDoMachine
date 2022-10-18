import React, { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const useTasks = () => {
  const { item: tasksList, saveItem: saveTaksLS } = useLocalStorage("taks", []);
  const tasksTotal = tasksList;
  //TodoCounter
  const [tasksLeftCounter, setTasksLeftCounter] = useState(0);
  const [tasksDoneCounter, setTasksDoneCounter] = useState(0);
  //TodoSearch
  const [taskSearched, setTasksSearched] = useState("");
  //ToDoModal
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  function tasksDone() {
    let tasksDone = tasksList.filter((task) => task.done === true).length;
    setTasksDoneCounter(tasksDone);
  }
  function tasksLeft() {
    let tasksLeft = tasksList.filter((task) => task.done === false).length;
    setTasksLeftCounter(tasksLeft);
  }

  let searchTasks = [];
  let tasksFound = tasksList.filter((e) => {
    return e.task.toLowerCase().includes(taskSearched.toLowerCase());
  });
  if (!taskSearched.length >= 1 && tasksFound.length <= 0) {
    searchTasks = tasksList;
  } else {
    searchTasks = tasksFound;
  }

  function saveTaks(text) {
    const newTasks = [...tasksList];
    newTasks.push({
      id: new Date().getTime(),
      task: text,
      done: false,
    });
    saveTaksLS(newTasks);
  }
  function editTasks(editTask, newTask) {
    const indexTask = tasksList.findIndex((e) => e.task === editTask);
    const tasksSaved = tasksList;

    const taskEdited = (tasksList[indexTask] = {
      ...tasksList[indexTask],
      task: newTask,
    });
    tasksSaved[indexTask] = taskEdited;

    saveTaksLS(tasksSaved);
  }

  function doneTask(e, setCheckedState, taskId) {
    const taskState = e.target.checked;
    //Update task state
    const tasksSaved = tasksList;
    const indexTask = tasksList.findIndex((e) => e.id === taskId);

    if (taskState) {
      tasksSaved[indexTask].done = true;
      // setDisplayTasks(tasksSaved);
      setTasksLeftCounter((prev) => prev - 1);
      setTasksDoneCounter((prev) => prev + 1);
      saveTaksLS(tasksSaved);
      setCheckedState(true);
    } else {
      tasksSaved[indexTask].done = false;
      // setDisplayTasks(tasksSaved);
      setTasksDoneCounter((prev) => prev - 1);
      setTasksLeftCounter((prev) => prev + 1);
      saveTaksLS(tasksSaved);
      setCheckedState(false);
    }
  }
  function deleteTask(e, taskId) {
    const newTasks = tasksList.filter((e) => e.id !== taskId);
    saveTaksLS(newTasks);
  }

  return {
    tasksList,
    tasksLeftCounter,
    tasksDoneCounter,
    tasksDone,
    tasksLeft,
    tasksTotal,
    taskSearched,
    searchTasks,
    setTasksSearched,
    saveTaks,
    editTasks,
    doneTask,
    deleteTask,
    openModal,
    setOpenModal,
    typeModal,
    setTypeModal,
  };
};

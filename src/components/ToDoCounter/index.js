import React, { useEffect } from "react";
import { getDate } from "../../utils/getDate";
import ProgressBar from "../ProgressBar";
export const ToDoCounter = ({
  tasksLeftCounter,
  tasksDoneCounter,
  tasksDone,
  tasksLeft,
  // useManageTasks,
  // displayTasks,
  tasksList,
}) => {
  useEffect(() => {
    tasksLeft();
    tasksDone();
  }, [tasksList]);
  const today = getDate();
  const numOfTasks = tasksList.length;
  return (
    <section className="Header">
      <article className="Header__infoContainer">
        <h1 className="Header__infoContainer__title">
          To
          <span className="Header__infoContainer__title__decor">Do</span>
          Machine
        </h1>
        <div className="Header__infoContainer__info">
          <p className="Header__infoContainer__info__date">{today}</p>
          <p className="Header__infoContainer__info__taskLeft">
            {tasksLeftCounter} task left
          </p>
        </div>
      </article>
      <ProgressBar completed={tasksDoneCounter} maxTask={numOfTasks} />
    </section>
  );
};

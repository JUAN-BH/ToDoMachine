import React, { useState } from "react";
import { AddModal } from "./AddModal";

export const ToDoItem = (props) => {
  const { task, taskId, taskDone, tasksList, setTasksList } = props;
  const [checkedState, setCheckedState] = useState(taskDone);
  const [displayModal, setDisplayModal] = useState(false);

  function doneTask(e) {
    const taskState = e.target.checked;
    if (taskState) {
      setCheckedState(true);
    } else {
      setCheckedState(false);
    }

    //Update task state
    const tasksSaved = JSON.parse(localStorage.getItem("taks"));
    const indexTask = tasksList.findIndex((e) => e.id === taskId);

    if (taskState) {
      tasksSaved[indexTask].done = true;
      localStorage.setItem("taks", JSON.stringify(tasksSaved));
      setTasksList(tasksSaved);
    } else if (!taskState) {
      tasksSaved[indexTask].done = false;

      localStorage.setItem("taks", JSON.stringify(tasksSaved));
      setTasksList(tasksSaved);
    }
  }

  function deleteTask(e) {
    const tasksSaved = JSON.parse(localStorage.getItem("taks"));
    const newTasks = tasksSaved.filter((e) => e.id !== taskId);

    localStorage.setItem("taks", JSON.stringify(newTasks));
    setTasksList(newTasks);
  }

  return (
    <li className="tasksContainer__list__item">
      <label className="tasksContainer__list__item__taskContainer">
        <input
          type={"checkbox"}
          className="taskComplete"
          checked={checkedState}
          onChange={(e) => doneTask(e)}
        />
        <p className={checkedState ? "taskDone" : "task"}>{task}</p>
      </label>
      <span
        className="tasksContainer__list__item__edit"
        onClick={() => setDisplayModal(true)}
      >
        <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.48 11.765H0.52C0.232375 11.765 0 11.9974 0 12.285V12.87C0 12.9415 0.0585 13 0.13 13H12.87C12.9415 13 13 12.9415 13 12.87V12.285C13 11.9974 12.7676 11.765 12.48 11.765ZM2.36763 10.4C2.40013 10.4 2.43263 10.3967 2.46513 10.3919L5.19837 9.9125C5.23087 9.906 5.26175 9.89137 5.2845 9.867L12.1729 2.97862C12.1879 2.96359 12.1999 2.94573 12.208 2.92608C12.2162 2.90642 12.2204 2.88534 12.2204 2.86406C12.2204 2.84278 12.2162 2.82171 12.208 2.80205C12.1999 2.78239 12.1879 2.76453 12.1729 2.7495L9.47213 0.047125C9.44125 0.01625 9.40062 0 9.35675 0C9.31287 0 9.27225 0.01625 9.24137 0.047125L2.353 6.9355C2.32862 6.95987 2.314 6.98912 2.3075 7.02162L1.82812 9.75487C1.81232 9.84193 1.81797 9.93152 1.84458 10.0159C1.8712 10.1003 1.91798 10.1769 1.98087 10.2391C2.08812 10.3431 2.223 10.4 2.36763 10.4V10.4Z"
            fill="black"
          />
        </svg>
      </span>
      <span className="tasksContainer__list__item__delete" onClick={deleteTask}>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.82143 2.14378V0.535676C4.82143 0.393606 4.87787 0.257355 4.97834 0.156896C5.0788 0.0564372 5.21506 0 5.35714 0H9.64286C9.78494 0 9.9212 0.0564372 10.0217 0.156896C10.1221 0.257355 10.1786 0.393606 10.1786 0.535676V2.14378H14.4643C14.6064 2.14378 14.7426 2.20021 14.8431 2.30067C14.9436 2.40113 15 2.53738 15 2.67945C15 2.82152 14.9436 2.95777 14.8431 3.05823C14.7426 3.15869 14.6064 3.21513 14.4643 3.21513H0.535714C0.393634 3.21513 0.257373 3.15869 0.156907 3.05823C0.0564411 2.95777 0 2.82152 0 2.67945C0 2.53738 0.0564411 2.40113 0.156907 2.30067C0.257373 2.20021 0.393634 2.14378 0.535714 2.14378H4.82143ZM5.89286 2.14378H9.10714V1.07242H5.89286V2.14378ZM2.14286 15C2.00078 15 1.86452 14.9436 1.76405 14.8431C1.66358 14.7426 1.60714 14.6064 1.60714 14.4643V3.21513H13.3929V14.4643C13.3929 14.6064 13.3364 14.7426 13.236 14.8431C13.1355 14.9436 12.9992 15 12.8571 15H2.14286ZM5.89286 11.7859C6.03494 11.7859 6.1712 11.7295 6.27166 11.629C6.37213 11.5286 6.42857 11.3923 6.42857 11.2503V5.89351C6.42857 5.75144 6.37213 5.61519 6.27166 5.51473C6.1712 5.41427 6.03494 5.35783 5.89286 5.35783C5.75078 5.35783 5.61452 5.41427 5.51405 5.51473C5.41358 5.61519 5.35714 5.75144 5.35714 5.89351V11.2503C5.35714 11.3923 5.41358 11.5286 5.51405 11.629C5.61452 11.7295 5.75078 11.7859 5.89286 11.7859ZM9.10714 11.7859C9.24922 11.7859 9.38548 11.7295 9.48595 11.629C9.58642 11.5286 9.64286 11.3923 9.64286 11.2503V5.89351C9.64286 5.75144 9.58642 5.61519 9.48595 5.51473C9.38548 5.41427 9.24922 5.35783 9.10714 5.35783C8.96506 5.35783 8.8288 5.41427 8.72833 5.51473C8.62787 5.61519 8.57143 5.75144 8.57143 5.89351V11.2503C8.57143 11.3923 8.62787 11.5286 8.72833 11.629C8.8288 11.7295 8.96506 11.7859 9.10714 11.7859Z"
            fill="black"
          />
        </svg>
      </span>
      {displayModal === true && (
        <AddModal
          setDisplayModal={setDisplayModal}
          tasksList={tasksList}
          setTasksList={setTasksList}
          typeModal="edit"
          task={task}
          taskId={taskId}
        />
      )}
    </li>
  );
};

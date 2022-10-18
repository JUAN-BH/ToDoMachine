import React from "react";
export const ToDoList = (props) => {
  const { searchTasks, tasksTotal, onNotFound, onEmpty, render, children } =
    props;
  const renderTasks = render || children;
  if (!tasksTotal.length) {
    return onEmpty();
  } else if (!searchTasks.length) {
    return onNotFound();
  } else {
    return (
      <section className="tasksContainer">
        <ul className="tasksContainer__list">{searchTasks.map(renderTasks)}</ul>
      </section>
    );
  }
};

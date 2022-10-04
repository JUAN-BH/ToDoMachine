import React from "react";

export const ToDoList = (props) => {
  return (
    <section className="tasksContainer">
      <ul className="tasksContainer__list">{props.children}</ul>
    </section>
  );
};

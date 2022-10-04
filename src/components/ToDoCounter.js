import React from "react";

export const ToDoCounter = () => {
  return (
    <section className="Header">
      <article className="Header__infoContainer">
        <h1 className="Header__infoContainer__title">To Do Machine</h1>
        <div className="Header__infoContainer__info">
          <p className="Header__infoContainer__info__date">
            Tuesday, October 4
          </p>
          <p className="Header__infoContainer__info__taskLeft">0 task left</p>
        </div>
      </article>
      <div className="Header__bar">barra</div>
    </section>
  );
};

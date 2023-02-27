import React, { useEffect } from "react";
import { useTasks } from "../../utils/useTasks";
import { useNavigate } from "react-router-dom";

export const NewPage = () => {
  const { saveTaks } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    const input = document.querySelector(".taskInput");
    input.focus();
  }, []);

  function closeModal(e) {
    const nodeName = e.target.nodeName;
    const elementName = e.target.name;

    if (
      nodeName === "SECTION" ||
      nodeName === "path" ||
      nodeName === "svg" ||
      elementName === "cancel"
    ) {
      navigate(-1);
    }
  }

  function addTask(e) {
    e.preventDefault();
    const target = e.target;
    saveTaks(target.task.value);
    navigate("/");
  }

  return (
    <section
      className="modalContainer animate__animated animate__fadeIn"
      onClick={closeModal}
    >
      <article className="modalContainer__modal">
        <span className="modalContainer__modal__closeIcon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 0.741928C10.1217 0.741928 12.1566 1.54128 13.6569 2.96414C15.1571 4.38699 16 6.3168 16 8.32903C16 10.3412 15.1571 12.2711 13.6569 13.6939C12.1566 15.1168 10.1217 15.9161 8 15.9161C5.87827 15.9161 3.84344 15.1168 2.34315 13.6939C0.842855 12.2711 0 10.3412 0 8.32903C0 6.3168 0.842855 4.38699 2.34315 2.96414C3.84344 1.54128 5.87827 0.741928 8 0.741928ZM8 7.40882L6.14171 5.64644C6.01305 5.52442 5.83854 5.45586 5.65657 5.45586C5.47461 5.45586 5.3001 5.52442 5.17143 5.64644C5.04276 5.76847 4.97048 5.93398 4.97048 6.10655C4.97048 6.27912 5.04276 6.44462 5.17143 6.56665L7.02971 8.32903L5.17143 10.0914C5.10772 10.1518 5.05718 10.2236 5.0227 10.3025C4.98822 10.3814 4.97048 10.4661 4.97048 10.5515C4.97048 10.637 4.98822 10.7216 5.0227 10.8005C5.05718 10.8795 5.10772 10.9512 5.17143 11.0116C5.23514 11.072 5.31077 11.12 5.39401 11.1527C5.47726 11.1854 5.56647 11.2022 5.65657 11.2022C5.74667 11.2022 5.83589 11.1854 5.91913 11.1527C6.00237 11.12 6.078 11.072 6.14171 11.0116L8 9.24923L9.85829 11.0116C9.922 11.072 9.99763 11.12 10.0809 11.1527C10.1641 11.1854 10.2533 11.2022 10.3434 11.2022C10.4335 11.2022 10.5227 11.1854 10.606 11.1527C10.6892 11.12 10.7649 11.072 10.8286 11.0116C10.8923 10.9512 10.9428 10.8795 10.9773 10.8005C11.0118 10.7216 11.0295 10.637 11.0295 10.5515C11.0295 10.4661 11.0118 10.3814 10.9773 10.3025C10.9428 10.2236 10.8923 10.1518 10.8286 10.0914L8.97029 8.32903L10.8286 6.56665C10.8923 6.50623 10.9428 6.4345 10.9773 6.35555C11.0118 6.27661 11.0295 6.192 11.0295 6.10655C11.0295 6.0211 11.0118 5.93649 10.9773 5.85754C10.9428 5.7786 10.8923 5.70687 10.8286 5.64644C10.7649 5.58602 10.6892 5.53809 10.606 5.50539C10.5227 5.47269 10.4335 5.45586 10.3434 5.45586C10.2533 5.45586 10.1641 5.47269 10.0809 5.50539C9.99763 5.53809 9.922 5.58602 9.85829 5.64644L8 7.40882Z"
              fill="white"
            />
          </svg>
        </span>
        <h2 className="modalContainer__modal__title">Add Task</h2>
        <form className="modalContainer__modal__form" onSubmit={addTask}>
          <input
            type="text"
            name="task"
            placeholder="Learn, study, do, ..."
            className="taskInput"
            autoComplete="off"
          />
          <input
            type="button"
            name="cancel"
            value="Cancel"
            className="btnModal"
          />
          <input type="submit" name="add" value="Add" className="btnModal" />
        </form>
      </article>
    </section>
  );
};

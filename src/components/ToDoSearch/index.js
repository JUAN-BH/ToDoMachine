import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ToDoSearch = ({ setTasksSearched }) => {
  const navigate = useNavigate();
  function searchTask(e) {
    const search = e.target.value;
    setTasksSearched(search);
  }

  function modalAdd() {
    navigate("/new");
  }

  return (
    <section className="searchAddToDo">
      <div className="searchAddToDo__inputContainer">
        <span className="searchAddToDo__inputContainer__icon">
          <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.2746 9.05031C11.1219 7.89405 11.5013 6.46047 11.3371 5.0364C11.1729 3.61233 10.4771 2.30279 9.38898 1.36976C8.30083 0.43673 6.90056 -0.0509732 5.46831 0.00422151C4.03607 0.0594162 2.67747 0.653438 1.66433 1.66745C0.651194 2.68145 0.0582276 4.04066 0.00406556 5.47315C-0.0500965 6.90563 0.43854 8.30575 1.37222 9.39339C2.30589 10.481 3.61575 11.176 5.03974 11.3392C6.46372 11.5024 7.89682 11.1219 9.05232 10.2737H9.05145C9.07769 10.3087 9.10569 10.3419 9.13719 10.3743L12.5058 13.7434C12.6699 13.9076 12.8924 13.9999 13.1245 14C13.3566 14.0001 13.5793 13.9079 13.7435 13.7439C13.9076 13.5798 13.9999 13.3572 14 13.125C14.0001 12.8929 13.908 12.6702 13.7439 12.506L10.3753 9.13695C10.344 9.10528 10.3104 9.0769 10.2746 9.05031ZM10.5004 5.68647C10.5004 6.31852 10.3759 6.94438 10.1341 7.52832C9.89223 8.11226 9.53776 8.64284 9.0909 9.08977C8.64403 9.5367 8.11352 9.89122 7.52967 10.1331C6.94581 10.375 6.32003 10.4995 5.68807 10.4995C5.05611 10.4995 4.43033 10.375 3.84648 10.1331C3.26262 9.89122 2.73211 9.5367 2.28525 9.08977C1.83838 8.64284 1.48391 8.11226 1.24207 7.52832C1.00023 6.94438 0.875753 6.31852 0.875753 5.68647C0.875753 4.40998 1.38276 3.18578 2.28525 2.28316C3.18773 1.38055 4.41177 0.873469 5.68807 0.873469C6.96438 0.873469 8.18841 1.38055 9.0909 2.28316C9.99338 3.18578 10.5004 4.40998 10.5004 5.68647Z"
              fill="black"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search task"
          className="searchAddToDo__inputContainer__input"
          onChange={searchTask}
        />
      </div>
      <span className="searchAddToDo__btnAdd" onClick={modalAdd}>
        <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 0C17.713 0 21.274 1.475 23.8995 4.1005C26.525 6.72601 28 10.287 28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.1005 23.8995C1.475 21.274 0 17.713 0 14C0 10.287 1.475 6.72601 4.1005 4.1005C6.72601 1.475 10.287 0 14 0V0ZM12.8 12.8H8.2C7.88174 12.8 7.57652 12.9264 7.35147 13.1515C7.12643 13.3765 7 13.6817 7 14C7 14.3183 7.12643 14.6235 7.35147 14.8485C7.57652 15.0736 7.88174 15.2 8.2 15.2H12.8V19.8C12.8 20.1183 12.9264 20.4235 13.1515 20.6485C13.3765 20.8736 13.6817 21 14 21C14.3183 21 14.6235 20.8736 14.8485 20.6485C15.0736 20.4235 15.2 20.1183 15.2 19.8V15.2H19.8C20.1183 15.2 20.4235 15.0736 20.6485 14.8485C20.8736 14.6235 21 14.3183 21 14C21 13.6817 20.8736 13.3765 20.6485 13.1515C20.4235 12.9264 20.1183 12.8 19.8 12.8H15.2V8.2C15.2 7.88174 15.0736 7.57652 14.8485 7.35147C14.6235 7.12643 14.3183 7 14 7C13.6817 7 13.3765 7.12643 13.1515 7.35147C12.9264 7.57652 12.8 7.88174 12.8 8.2V12.8V12.8Z"
            fill="#BBBBBB"
          />
        </svg>
      </span>
    </section>
  );
};

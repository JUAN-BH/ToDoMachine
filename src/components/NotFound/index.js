import React from "react";

export const NotFound = ({ taskSearched }) => {
  return (
    <div>
      <p className="noTasks">We couldn't find the task: "{taskSearched}"</p>
    </div>
  );
};

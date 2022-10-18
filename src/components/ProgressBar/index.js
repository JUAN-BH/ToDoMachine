import React from "react";

const ProgressBar = (props) => {
  const { completed, maxTask } = props;
  const completePercent = Math.round((completed / maxTask) * 100);
  const fillerStyles = {
    position: "absolute",
    height: "100%",
    width: `${completePercent}%`,
    backgroundColor: "#009AFF",
    borderRadius: "inherit",
    transition: "all 0.2s",
  };

  return (
    <div className="Header__bar">
      <div style={fillerStyles}></div>
      <p className="Header__bar__percent">
        {isNaN(completePercent) ? 0 : completePercent}%
      </p>
    </div>
  );
};

export default ProgressBar;

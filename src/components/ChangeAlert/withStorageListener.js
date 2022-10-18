import React, { useState } from "react";

export const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);
    window.addEventListener(
      "storage",
      (change) => {
        if (change.key === "taks") {
          setStorageChange(true);
        }
      },
      false
    );
    return (
      <WrappedComponent show={storageChange} toggleShow={setStorageChange} />
    );
  };
};

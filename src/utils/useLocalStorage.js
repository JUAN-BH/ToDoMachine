import React, { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [item, setItem] = useState(initialValue);
  useEffect(() => {
    let tasksSaved = JSON.parse(localStorage.getItem(key));
    //si las tasks guardadas no son una array
    if (!Array.isArray(tasksSaved)) {
      //Se manda a localStorage para inicializar las tasks con el initialValue
      localStorage.setItem("taks", JSON.stringify(initialValue));
      tasksSaved = initialValue;
    }
    setItem(tasksSaved);
  }, []);

  const saveItem = (task) => {
    //guarda los taks recibidos
    localStorage.setItem("taks", JSON.stringify(task));
    //actualiza el estado de los tasks
    setItem(task);
  };

  return {
    item,
    saveItem,
  };
};

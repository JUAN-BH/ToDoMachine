import React, { useEffect, useReducer, useState } from "react";

const initialState = (initalValue) => ({
  item: initalValue,
});

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        item: action.payload,
      };
      break;
    default:
      return {
        ...state,
      };
  }
};

export const useLocalStorage = (key, initialValue) => {
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));
  const { item } = state;
  const onSave = (value) => dispatch({ type: "SAVE", payload: value });

  useEffect(() => {
    let tasksSaved = JSON.parse(localStorage.getItem(key));
    //si las tasks guardadas no son una array
    if (!Array.isArray(tasksSaved)) {
      //Se manda a localStorage para inicializar las tasks con el initialValue
      localStorage.setItem("taks", JSON.stringify(initialValue));
      tasksSaved = initialValue;
    }
    onSave(tasksSaved);
  }, []);

  const saveItem = (task) => {
    //guarda los taks recibidos
    localStorage.setItem("taks", JSON.stringify(task));
    //actualiza el estado de los tasks
    onSave(task);
  };

  return {
    item,
    saveItem,
  };
};

import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

const useAddTodo = () => {

  const { 
    data,
    saveData,
  } = useContext(AppContext);

  const addTodo = (text) => {
    let addID = 0;
    let newTodo;
    let found;

    if (data === undefined) {
      newTodo = [];
     } else {
      newTodo = [...data];
      const ID = newTodo.length + 1;
      found = newTodo.find(todo => todo.id === ID);
     }

    const addOneID = newTodo.length + 1;

    if (found) {
      addID = addOneID + 1;
    } else {
      addID = addOneID;
    }

    newTodo.push({
      id: addID,
      text,
      completed: false
    });
    saveData(newTodo);
  }

  return {
    addTodo
  };
};

export default useAddTodo;
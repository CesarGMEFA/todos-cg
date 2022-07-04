import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext';

const useStatusTodos = () => {

  const {
    data,
    saveData,
  } = useContext(AppContext);

  
  const status = (id) => {
    
    const todoIndex = data.findIndex(todo => todo.id == id);
    const newTodos = [...data]
  
    if (data[todoIndex].completed === false) {
      newTodos[todoIndex].completed = true;
    } else if(data[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;
    };
  
    saveData(newTodos)
  };

  return {
    status
  };
};

export default useStatusTodos;
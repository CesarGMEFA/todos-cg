import { useContext } from 'react';

import AppContext from "../contexts/AppContext";


const useClearCompleted = () => {

  const { saveData } = useContext(AppContext);
  const localStorageData = localStorage.getItem('DATA_v1');

  const clearCompleted = () => {
    const data = JSON.parse(localStorageData);
    const newTodos = data.filter( todo => todo.completed === false)
    saveData(newTodos)
  }

  return {
    clearCompleted
  }
};

export default useClearCompleted;
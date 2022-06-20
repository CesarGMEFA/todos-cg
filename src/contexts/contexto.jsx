import { useState } from "react";

export default function contexto() {
  
  let boolTheme;
  const localStorageTheme = localStorage.getItem('THEME');
  if (localStorageTheme == null ) {
    localStorage.setItem('THEME', 'true');
  } else {
    boolTheme = JSON.parse(localStorageTheme);
  }
  
  function saveTheme(newTheme) {
    const stringTheme = JSON.stringify(newTheme);
    localStorage.setItem('THEME', stringTheme);
    setTheme(newTheme);
  }
  const [ theme, setTheme ] = useState(boolTheme);

  // let todoData = [
  //   {
  //     id: 1,
  //     text: 'codificar',
  //     completed: false
  //   },
  //   {
  //     id: 2,
  //     text: 'limpiar',
  //     completed: false
  //   },
  //   {
  //     id: 3,
  //     text: 'Ejercicio',
  //     completed: true
  //   },
  // ];

  const localStorageData = localStorage.getItem('DATA_v1');
  let parsedData;

  if(!localStorageData) {
    localStorage.setItem('DATA_v1', JSON.stringify([]));
    parsedData = [];
  } else {
    parsedData = JSON.parse(localStorageData);
  }

  const [ data, setData ] = useState(parsedData);

  
  const saveData = (newData) => {
    const stringData = JSON.stringify(newData);
    localStorage.setItem('DATA_v1', stringData);
    setData(newData);
  }
  

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

  const clearCompleted = () => {
    const data = JSON.parse(localStorageData);
    const newTodos = data.filter( todo => todo.completed === false)
    saveData(newTodos)
  }

  return {
    theme,
    setTheme,
    data,
    setData,
    saveTheme,
    clearCompleted,
    saveData,
    addTodo
  }
}
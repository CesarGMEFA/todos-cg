import { useContext } from "react";
import AppContext from "../../contexts/AppContext";

const useFilters = () => {

  const { setData } = useContext(AppContext);
  const localStorageData = localStorage.getItem('DATA_v1');

  const all = () => {
    setData(JSON.parse(localStorageData));
  }

  const active = () => {
    const data = JSON.parse(localStorageData)
    const newTodos = data.filter(todo => !todo.completed)
    setData(newTodos)
  }

  const completed = () => {
    const data = JSON.parse(localStorageData)
    const newTodos = data.filter(todo => todo.completed)
    setData(newTodos)
  }

  return {
    all,
    active,
    completed
  };
};

export default useFilters;
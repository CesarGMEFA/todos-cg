import { useState } from "react";

export default function useTodos() {

  const localStorageData = localStorage.getItem('DATA_v1');
  let parsedData;

  if(!localStorageData) {
    localStorage.setItem('DATA_v1', JSON.stringify([]));
    parsedData = [];
  } else {
    parsedData = JSON.parse(localStorageData);
  }

  const [ data, setData ] = useState(parsedData);
  const [ dataView, setDataView ] = useState(data);

  
  const saveData = (newData) => {
    const stringData = JSON.stringify(newData);
    localStorage.setItem('DATA_v1', stringData);
    setData(newData);
    // setDataView(newData);
  }

  return {
    data,
    setData,
    dataView,
    setDataView,
    saveData,
  }
}
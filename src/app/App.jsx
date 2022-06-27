import React from "react";
import AppContext from '../contexts/AppContext';
import useTodos from "../utils/hooks/useTodos";
import UI from "./UI";

function App() {
  

  return (
    <AppContext.Provider value={useTodos()}>
      <UI />
    </AppContext.Provider>
  )
}

export default App;

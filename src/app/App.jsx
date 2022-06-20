import React, { useState } from "react";
import AppContext from '../contexts/AppContext';
import contexto from "../contexts/contexto";
import UI from "./UI";

function App() {
  

  return (
    <AppContext.Provider value={contexto()}>
      <UI />
    </AppContext.Provider>
  )
}

export default App;

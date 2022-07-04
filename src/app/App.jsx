import React from "react";

import AppContext from '../contexts/AppContext';
import ThemeContext from '../contexts/ThemeContext';

import useTodos from "../hooks/useTodos";
import useTheme from "../hooks/useTheme";

import UI from "./UI";

import { clickColor } from "../utils/clickColor"

function App() {

  return (
    <AppContext.Provider value={useTodos()}>
      <ThemeContext.Provider value={useTheme()}>
        <UI />
      </ThemeContext.Provider>
    </AppContext.Provider>
  )
}

export default App;

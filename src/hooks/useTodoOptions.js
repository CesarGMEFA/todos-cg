import React from "react";

import AppContext from "../contexts/AppContext";

const useTodoOptions = () => {

  const { 
    data
  } = React.useContext(AppContext)
  
  const nonComplete = data.filter(todo => !todo.completed).length

  return {
    nonComplete
  }
}

export default useTodoOptions
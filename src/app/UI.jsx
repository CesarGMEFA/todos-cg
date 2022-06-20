import React, { useContext } from 'react'
import Box from '../container/Box';
import AppContext from '../contexts/AppContext';

function UI() {
  const { theme } = useContext(AppContext);
  return (
    <div className={theme ? "dark" : "ligth"}
    >
      <Box />
    </div>
  )
}

export default UI
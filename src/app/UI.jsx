import React, { useContext } from 'react';

import ThemeContext from '../contexts/ThemeContext';


import Box from '../container/Box';

function UI() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "dark" : "ligth"}
    >
      <Box />
    </div>
  )
}

export default UI
import { useState } from 'react';

const useTheme = () => {
  
  let boolTheme;
  const localStorageTheme = localStorage.getItem('THEME');
  if (localStorageTheme == null ) {
    localStorage.setItem('THEME', 'true');
  } else {
    boolTheme = JSON.parse(localStorageTheme);
  };

  const [ theme, setTheme ] = useState(boolTheme);
  console.log(theme);
  
  function saveTheme(newTheme) {
    const stringTheme = JSON.stringify(newTheme);
    localStorage.setItem('THEME', stringTheme);
    setTheme(newTheme);
  };
  
  return {
    saveTheme,
    theme,
    setTheme
  };
};

export default useTheme;
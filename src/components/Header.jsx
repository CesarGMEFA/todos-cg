import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext';

function Header() {
  const { theme, setTheme, saveTheme } = useContext(AppContext);

  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-white text-3xl tracking-[.30em]'>TODO</h1>
      <button type='button' onClick={() => saveTheme(!theme)}>
        <img className='w-6' src={theme ? 'assets/images/icon-sun.svg' : 'assets/images/icon-moon.svg'}/>
      </button>
    </div>
  )
}

export default Header
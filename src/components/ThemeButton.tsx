import React, { useContext } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { DarkModeContext } from '../context/DarkModeContext';

export default function ThemeButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button
      className="fixed right-5 bottom-5 flex justify-center items-center w-12 h-12 text-3xl rounded-full bg-slate-800 text-white dark:bg-white dark:text-slate-800"
      onClick={() => toggleDarkMode()}
    >
      {!darkMode && <HiMoon />}
      {darkMode && <HiSun />}
    </button>
  );
}

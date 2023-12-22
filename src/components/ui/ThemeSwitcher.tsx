'use client'

import { MoonIcon, SunDimIcon } from "lucide-react";
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark)
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isDark ? <SunDimIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

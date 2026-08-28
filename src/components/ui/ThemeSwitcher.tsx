'use client'

import { useEffect, useState } from 'react';
import { useT } from '@/lib/i18n';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(true)
  const t = useT()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark)
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('theme.toDay') : t('theme.toNight')}
      className="pixel-font h-10 border-2 border-secondary bg-background px-3 text-[8px] text-secondary shadow-[3px_3px_0_hsl(var(--secondary))] hover:bg-secondary hover:text-secondary-foreground active:translate-x-1 active:translate-y-1 active:shadow-none"
    >
      {isDark ? t('theme.day') : t('theme.night')}
    </button>
  );
};

export default ThemeSwitcher;

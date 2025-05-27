'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 dark:text-white"
    >
      {isDark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
} 
import { useState, useEffect } from 'react';
import styles from '../styles/App.module.css';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isLight = savedTheme === 'light';
      setIsDark(!isLight);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? '' : newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={styles.themeToggle} onClick={toggleTheme}>
      <div className={`${styles.toggleSlider} ${isDark ? '' : styles.toggleSliderLight}`}>
        <div className={styles.toggleIcon}>
          {isDark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <path d="m12 1-1.5 3.5L12 8l1.5-3.5L12 1zM21 12l-3.5-1.5L14 12l3.5 1.5L21 12zM12 23l1.5-3.5L12 16l-1.5 3.5L12 23zM3 12l3.5 1.5L10 12l-3.5-1.5L3 12z"/>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
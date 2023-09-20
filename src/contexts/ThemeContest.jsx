import { THEME } from '@/helpers';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEME.dark);
  useEffect(() => {
    document.body.setAttribute(THEME.dataTheme, THEME.dark);
  }, []);

  const toggleTheme = () => {
    setTheme((oldTheme) => THEME.changeMode(oldTheme));
    document.body.setAttribute(THEME.dataTheme, THEME.changeMode(theme));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

import { THEME } from '@/helpers';
import { useLocalState } from '@/hook/useLocalStorage';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [value, setValue] = useLocalState('theme', THEME.light);
  const [theme, setTheme] = useState(value);
  useEffect(() => {
    document.body.setAttribute(THEME.dataTheme, theme);
  }, []);

  const toggleTheme = () => {
    setTheme((oldTheme) => THEME.changeMode(oldTheme));
    document.body.setAttribute(THEME.dataTheme, THEME.changeMode(theme));
    setValue(THEME.changeMode(theme));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

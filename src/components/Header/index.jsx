import { useTheme } from '@/contexts/ThemeContest';
import { THEME } from '@/helpers';
import { IconMoon, IconSun } from '@tabler/icons-react';
import styles from './header.module.css';
export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav>
        <h1>Where in the world?</h1>
        <button className={styles.toggleTheme} onClick={toggleTheme}>
          {THEME.isDark(theme) ? <IconSun /> : <IconMoon />}
          &nbsp;<span>{THEME.changeMode(theme)}</span>&nbsp;Mode
        </button>
      </nav>
    </header>
  );
};

import { useTheme } from '@/contexts/ThemeContext';
import { HOME, THEME } from '@/helpers';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav>
        <Link to={HOME} className={styles.link}>
          <h1>Where in the world?</h1>
        </Link>
        <button className={styles.toggleTheme} onClick={toggleTheme}>
          {THEME.isDark(theme) ? <IconSun /> : <IconMoon />}
          &nbsp;<span>{THEME.changeMode(theme)}</span>&nbsp;Mode
        </button>
      </nav>
    </header>
  );
};

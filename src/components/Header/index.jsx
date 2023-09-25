import { useTheme } from '@/contexts/ThemeContext';
import { ROUTES, STR_TXT, THEME } from '@/helpers';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <nav>
        <Link to={ROUTES.home} className={styles.link}>
          <h1>{STR_TXT.titleHeader}</h1>
        </Link>
        <button className={styles.toggleTheme} onClick={toggleTheme}>
          {THEME.isDark(theme) ? <IconSun /> : <IconMoon />}
          &nbsp;<span>{THEME.changeMode(theme)}</span>&nbsp;{STR_TXT.mode}
        </button>
      </nav>
    </header>
  );
};

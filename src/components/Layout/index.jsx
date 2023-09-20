import { Header } from '@/components/Header';
import styles from './layout.module.css';
export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className={styles.mainRoot}>{children}</div>
    </main>
  );
};

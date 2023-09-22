import { Header, Spinner } from '@/components';
import { useCountries } from '@/contexts/CountriesContext';
import styles from './layout.module.css';
export const Layout = ({ children }) => {
  const { loading } = useCountries();
  return (
    <main>
      <Header />
      <div className={styles.mainRoot}>{loading ? <Spinner /> : <>{children}</>}</div>
    </main>
  );
};

import { ROUTES, STR_TXT } from '@/helpers';
import { IconArrowBack } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import styles from './back.module.css';
export const GoBack = () => {
  return (
    <section className={styles.goBackRoot}>
      <Link to={ROUTES.home} className={styles.link}>
        <button className={styles.goBack}>
          <IconArrowBack />
          <span>{STR_TXT.back}</span>
        </button>
      </Link>
    </section>
  );
};

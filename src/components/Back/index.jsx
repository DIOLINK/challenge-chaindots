import { HOME } from '@/helpers';
import { IconArrowBack } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import styles from './back.module.css';
export const GoBack = () => {
  return (
    <section className={styles.goBackRoot}>
      <Link to={HOME} className={styles.link}>
        <button className={styles.goBack}>
          <IconArrowBack />
          <span>Back</span>
        </button>
      </Link>
    </section>
  );
};

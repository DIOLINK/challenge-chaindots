import { IconArrowBack } from '@tabler/icons-react';
import styles from './back.module.css';
export const GoBack = () => {
  return (
    <section className={styles.goBackRoot}>
      <button className={styles.goBack}>
        <IconArrowBack />
        <span>Back</span>
      </button>
    </section>
  );
};

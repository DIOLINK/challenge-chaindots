import { STR_TXT } from '@/helpers';
import styles from './empty.module.css';
export const Empty = () => {
  return (
    <div className={styles.emptyRoot}>
      <h3>{STR_TXT.empty}</h3>
    </div>
  );
};

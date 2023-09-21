import styles from './empty.module.css';
export const Empty = () => {
  const EMPTY = 'I sorry, I didn´t find anything';
  return (
    <div className={styles.emptyRoot}>
      <h3>{EMPTY}</h3>
    </div>
  );
};

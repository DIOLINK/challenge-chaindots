import styles from './spinner.module.css';
export const Spinner = () => {
  return (
    <section className={styles.sectionLoader}>
      <span className={styles.loader}></span>
    </section>
  );
};

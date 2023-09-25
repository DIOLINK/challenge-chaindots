import { STR_TXT } from '@/helpers';
import { useRouteError } from 'react-router-dom';
import styles from './error.module.css';
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.errorRoot}>
      <h1>{STR_TXT.oops}</h1>
      <p>{STR_TXT.sorry}</p>
      <div className={styles.messagesError}>
        <h4>{STR_TXT.titleError}</h4>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

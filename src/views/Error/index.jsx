import { useRouteError } from 'react-router-dom';
import styles from './error.module.css';
export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className={styles.errorRoot}>
      <h1>Oops!!!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <div className={styles.messagesError}>
        <h4>Message Error</h4>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

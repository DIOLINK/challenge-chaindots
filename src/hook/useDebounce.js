import { useEffect, useState } from 'react';
const useDebounce = (callback, delay = 500) => {
  const [timer, setTimer] = useState(null);
  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const debouncedFunction = (...args) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);
    setTimer(newTimer);
  };

  return debouncedFunction;
};

export default useDebounce;

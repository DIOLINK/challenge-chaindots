import { getItemLocalStorage, isFrontend } from '@/helpers';
import { useState } from 'react';

export const useLocalState = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => getItemLocalStorage(key, initialValue));

  const setValue = (value) => {
    try {
      if (isFrontend()) {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('Error useLocalState:', error);
    }
  };

  return [storedValue, setValue];
};

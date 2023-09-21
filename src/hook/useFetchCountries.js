import { getCountries } from '@/services';
import { useEffect, useState } from 'react';

export const useFetchCountries = (region) => {
  const [countries, setCountries] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getCountries().then((data) => {
      setCountries({ data, loading: false });
    });
  }, []);

  return countries; // { data: [], loading: true };
};

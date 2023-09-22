import { INIT_VALUE } from '@/helpers/index';
import { getCountries } from '@/services';
import { useEffect, useState } from 'react';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState(INIT_VALUE);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries({ data, loading: false });
    });
  }, []);

  return countries; // { data: [], loading: true };
};

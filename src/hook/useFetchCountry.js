import { INIT_VALUE } from '@/helpers/index';
import { getCountry } from '@/services/getCountries';
import { useEffect, useState } from 'react';
import { useLocalState } from './useLocalStorage';

export const useFetchCountry = () => {
  const [value, setValue] = useLocalState('country', {});
  const [country, setCounty] = useState(value);
  const [countriesBorder, setCountriesBorder] = useState(INIT_VALUE);
  const [param, setParams] = useState(undefined);

  useEffect(() => {
    setValue(country);
    setCountriesBorder(INIT_VALUE);
    let fetchCode = '';
    if (Object.keys(country).length === 0 || !country.borders) return;
    country.borders.forEach((borderCode) => (fetchCode += `${borderCode},`));
    getCountry(fetchCode).then((data) => {
      setCountriesBorder({ data, loading: false });
    });
  }, [country, param]);

  return { country, countriesBorder, setCounty, setParams };
};

import { INIT_VALUE } from '@/helpers/index';
import { getCountry } from '@/services/getCountries';
import { useEffect, useState } from 'react';

export const useFetchCountry = () => {
  const [country, setCounty] = useState({});
  const [countriesBorder, setCountriesBorder] = useState(INIT_VALUE);

  useEffect(() => {
    setCountriesBorder(INIT_VALUE);
    let fetchCode = '';
    if (Object.keys(country).length === 0 || !country.borders) return;
    country.borders.forEach((borderCode) => (fetchCode += `${borderCode},`));
    getCountry(fetchCode).then((data) => {
      setCountriesBorder({ data, loading: false });
    });
  }, [country]);

  return { country, countriesBorder, setCounty };
};

import { useCountry } from '@/contexts/CounterContext';
import { getCountryByName } from '@/services/getCountries';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BorderCountries } from './BorderCountries';
import { CountryInfoDetails } from './CountryInfoDetails';
import styles from './info.module.css';
export const Info = () => {
  let { nameCountry } = useParams();
  const { country, setCounty } = useCountry();
  const { name, flags } = country;
  useEffect(() => {
    if (nameCountry === undefined || nameCountry.replaceAll('_', ' ') === name.common) return;
    getCountryByName(nameCountry.replaceAll('_', ' ')).then((data) => {
      setCounty(data[0]);
    });
  }, [nameCountry]);
  return (
    <section className={styles.infoRoot}>
      <div className={styles.flag}>
        <img src={flags.svg} alt='flag' title={name.common} />
      </div>
      <div className={styles.countryContainer}>
        <CountryInfoDetails {...country} />
        <BorderCountries {...country} />
      </div>
    </section>
  );
};

import { useCountry } from '@/contexts/CounterContext';
import { BorderCountries } from './BorderCountries';
import { CountryInfoDetails } from './CountryInfoDetails';
import styles from './info.module.css';
export const Info = () => {
  const { country } = useCountry();
  const { name, flags } = country;
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

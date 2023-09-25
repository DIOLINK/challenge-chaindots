import { useCountry } from '@/contexts/CounterContext';
import { STR_TXT, routeInfoCountry } from '@/helpers';
import { useNavigate } from 'react-router-dom';
import styles from './info.module.css';
export const BorderCountries = () => {
  const { countriesBorder, setCounty } = useCountry();
  const navigate = useNavigate();
  const handleClickCountry = (country) => {
    setCounty(country);
    navigate(routeInfoCountry(country.name.common));
  };
  return (
    <div className={styles.borderCountries}>
      <span>{STR_TXT.borderCountries}:</span>
      <div className={styles.keyboard}>
        {countriesBorder.map((country, index) => (
          <button
            className={styles.btnBorder}
            style={{ animationDelay: `${0.4 * index}s` }}
            key={country.name.common + index}
            title={country.name.common}
            onClick={() => handleClickCountry(country)}
          >
            {country.name.common}
          </button>
        ))}
      </div>
    </div>
  );
};

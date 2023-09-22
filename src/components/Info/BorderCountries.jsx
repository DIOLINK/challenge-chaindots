import { useCountry } from '@/contexts/CounterContext';
import { routeInfoCountry } from '@/helpers/index';
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
      <span>Border Countries:</span>
      <div className={styles.keyboard}>
        {countriesBorder.map((country, index) => (
          <button
            className={styles.btnBorder}
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
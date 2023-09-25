import { useCountry } from '@/contexts/CounterContext';
import { STR_TXT, routeInfoCountry } from '@/helpers';
import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';
export const CardItem = ({ item }) => {
  const { flags, name, population, region, capital } = item;
  const navigate = useNavigate();
  const { setCounty } = useCountry();
  const handleClickCountry = () => {
    setCounty(item);
    navigate(routeInfoCountry(name.common));
  };
  return (
    <div className={styles.cardRoot} onClick={handleClickCountry}>
      <div className={styles.flagContainer}>
        <img src={flags.png} alt={name.common} title={name.common} />
      </div>
      <div className={styles.info}>
        <h3>{name.common}</h3>
        <ul>
          <li>
            <strong>{STR_TXT.population}:&nbsp;</strong>
            {new Intl.NumberFormat('en').format(population)}
          </li>
          <li>
            <strong>{STR_TXT.region}:&nbsp;</strong>
            {region}
          </li>
          <li>
            <strong>{STR_TXT.capital}:&nbsp;</strong>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

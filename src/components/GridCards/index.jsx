import { useCountries } from '@/contexts/CountriesContext';
import { isEmpty } from '@/helpers/index';
import { CardItem } from './CardItem';
import { Empty } from './Empty';
import styles from './gridCards.module.css';
export const GridCards = () => {
  const { countries } = useCountries();

  if (isEmpty(countries)) {
    return <Empty />;
  }
  return (
    <div className={styles.gridCardsRoot}>
      {countries.map((country, index) => (
        <CardItem key={country.name.common + index} item={country} />
      ))}
    </div>
  );
};

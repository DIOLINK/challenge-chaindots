import { CardItem } from './CardItem';
import styles from './gridCards.module.css';
export const GridCards = ({ items = [] }) => {
  return (
    <div className={styles.gridCardsRoot}>
      {items.map((country, index) => (
        <CardItem key={country.name.common + index} item={country} />
      ))}
    </div>
  );
};

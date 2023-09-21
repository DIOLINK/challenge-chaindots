import styles from './card.module.css';
export const CardItem = ({ item }) => {
  const { flags, name, population, region, capital } = item;
  return (
    <div className={styles.cardRoot}>
      <div className={styles.flagContainer}>
        <img src={flags.png} alt={name.common} title={name.common} />
      </div>
      <div className={styles.info}>
        <h3>{name.common}</h3>
        <ul>
          <li>
            <strong>Population:&nbsp;</strong>
            {new Intl.NumberFormat('en').format(population)}
          </li>
          <li>
            <strong>Region:&nbsp;</strong>
            {region}
          </li>
          <li>
            <strong>Capital:&nbsp;</strong>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

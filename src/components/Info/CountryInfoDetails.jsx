import styles from './info.module.css';
export const CountryInfoDetails = ({
  capital,
  currencies = {},
  languages = {},
  name = {},
  population,
  region,
  subregion,
  tld,
}) => {
  return (
    <div className={styles.countryInfo}>
      <h2>{name.common}</h2>
      <div className={styles.countryDetails}>
        <ul>
          <li>
            <strong>Native Name:&nbsp;</strong>
            {name.nativeName &&
              Object.values(name.nativeName).map((nativeName, index) => (
                <span key={nativeName.common + index}>
                  &nbsp;
                  {nativeName.common}
                  {`${Object.values(name.nativeName).length - 1 === index ? '' : ';'}`}
                </span>
              ))}
          </li>
          <li>
            <strong>Population:&nbsp;</strong>
            {new Intl.NumberFormat('en').format(population)}
          </li>
          <li>
            <strong>Region:&nbsp;</strong>
            {region}
          </li>
          <li>
            <strong>Sub Region:&nbsp;</strong>
            {subregion}
          </li>
          <li>
            <strong>Capital:&nbsp;</strong>
            {capital}
          </li>
          <li>
            <strong>Top Level Domain:&nbsp;</strong>
            {tld}
          </li>
          <li>
            <strong>Currencies:&nbsp;</strong>
            {Object.values(currencies).map((currency, index) => (
              <span key={currency.name + index}>
                &nbsp;
                {currency.name}
              </span>
            ))}
          </li>
          <li>
            <strong>Languages:&nbsp;</strong>
            {Object.values(languages).map((language, index) => (
              <span key={language + index}>
                &nbsp;
                {language}
                {`${Object.values(languages).length - 1 === index ? '' : ','}`}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

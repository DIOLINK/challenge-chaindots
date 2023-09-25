import { STR_TXT } from '@/helpers';
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
            <strong>{STR_TXT.nativeName}:&nbsp;</strong>
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
            <strong>{STR_TXT.population}:&nbsp;</strong>
            {new Intl.NumberFormat('en').format(population)}
          </li>
          <li>
            <strong>{STR_TXT.region}:&nbsp;</strong>
            {region}
          </li>
          <li>
            <strong>{STR_TXT.subRegion}:&nbsp;</strong>
            {subregion}
          </li>
          <li>
            <strong>{STR_TXT.capital}:&nbsp;</strong>
            {capital}
          </li>
          <li>
            <strong>{STR_TXT.topLevelDomain}:&nbsp;</strong>
            {tld}
          </li>
          <li>
            <strong>{STR_TXT.currencies}:&nbsp;</strong>
            {Object.values(currencies).map((currency, index) => (
              <span key={currency.name + index}>
                &nbsp;
                {currency.name}
              </span>
            ))}
          </li>
          <li>
            <strong>{STR_TXT.languages}:&nbsp;</strong>
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

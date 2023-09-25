import { useCountries } from '@/contexts/CountriesContext';
import { STR_TXT } from '@/helpers';
import useForm from '@/hook/useForms';
import { IconSearch } from '@tabler/icons-react';
import styles from './search.module.css';
export const Search = () => {
  const { countryToFilter, setCountryToFilter } = useCountries();
  const [{ search }, handleInputChange] = useForm({
    search: countryToFilter,
  });

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    setCountryToFilter(search);
  };

  return (
    <>
      <form onSubmit={handleSubmitSearch} className={styles.form}>
        <IconSearch />
        <input
          type='text'
          name={STR_TXT.search}
          placeholder={STR_TXT.SearchCountry}
          autoComplete='off'
          value={search}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </form>
    </>
  );
};

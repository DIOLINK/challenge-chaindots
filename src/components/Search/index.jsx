import { useCountries } from '@/contexts/CountriesContext';
import { STR_TXT } from '@/helpers';
import useDebounce from '@/hook/useDebounce';
import useForm from '@/hook/useForms';
import { IconSearch } from '@tabler/icons-react';
import { useEffect } from 'react';
import styles from './search.module.css';
export const Search = () => {
  const { countryToFilter, setCountryToFilter } = useCountries();
  const [{ search }, handleInputChange] = useForm({
    search: countryToFilter,
  });
  const debouncedSearch = useDebounce((value) => setCountryToFilter(value));

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  return (
    <>
      <div className={styles.form}>
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
      </div>
    </>
  );
};

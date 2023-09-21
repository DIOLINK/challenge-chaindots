import { useCountries } from '@/contexts/CountriesContext';
import useForm from '@/hook/useForms';
import { IconSearch } from '@tabler/icons-react';
import styles from './search.module.css';
export const Search = () => {
  const [formValues, handleInputChange, reset] = useForm({
    search: '',
  });
  const { search } = formValues;
  const { setCountryToFilter } = useCountries();
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
          name='search'
          placeholder='Search for a country...'
          autoComplete='off'
          value={search}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
      </form>
    </>
  );
};

import { STR_TXT, filterByCountry, filterByRegion } from '@/helpers';
import { useFetchCountries } from '@/hook/useFetchCountries';
import { createContext, useContext, useState } from 'react';

const CountriesContext = createContext();

export const useCountries = () => useContext(CountriesContext);

export const CountriesProvider = ({ children }) => {
  const [countryToFilter, setCountryToFilter] = useState('');
  const [regionToFilter, setRegionToFilter] = useState('');
  const { data: countries, loading } = useFetchCountries();
  const listRegions = [STR_TXT.all, ...new Set(countries.map((country) => country.region))].map(
    (item) => ({
      ['value']: item.toLowerCase(),
      ['label']: item,
    })
  );
  return (
    <CountriesContext.Provider
      value={{
        countries: filterByCountry(
          filterByRegion(countries, regionToFilter),
          countryToFilter.toLowerCase()
        ),
        countryToFilter,
        listRegions,
        loading,
        regionToFilter,
        setCountryToFilter,
        setRegionToFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

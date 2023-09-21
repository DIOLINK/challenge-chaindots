import { filterByCountry, filterByRegion } from '@/helpers/index';
import { useFetchCountries } from '@/hook/useFetchCountries';
import { createContext, useContext, useState } from 'react';

const CountriesContext = createContext();

export const useCountries = () => useContext(CountriesContext);

export const CountriesProvider = ({ children }) => {
  const [countryToFilter, setCountryToFilter] = useState('');
  const [regionToFilter, setRegionToFilter] = useState('');
  const { data, loading } = useFetchCountries();
  const listRegions = new Set(data.map((country) => country.region));

  return (
    <CountriesContext.Provider
      value={{
        countries: filterByCountry(
          filterByRegion(data, regionToFilter),
          countryToFilter.toLowerCase()
        ),
        listRegions,
        loading,
        setCountryToFilter,
        setRegionToFilter,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
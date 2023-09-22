import { useFetchCountry } from '@/hook/useFetchCountry';
import { createContext, useContext } from 'react';

const CountryContext = createContext();

export const useCountry = () => useContext(CountryContext);

export const CountryProvider = ({ children }) => {
  const { country, countriesBorder, setCounty } = useFetchCountry();
  return (
    <CountryContext.Provider
      value={{
        loading: country.loading || countriesBorder.loading,
        country,
        countriesBorder: countriesBorder.data || [],
        setCounty,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

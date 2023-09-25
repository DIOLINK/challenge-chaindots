import { CountryProvider } from './CounterContext';
import { CountriesProvider } from './CountriesContext';
import { ThemeProvider } from './ThemeContext';

export const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <CountryProvider>{children}</CountryProvider>
      </CountriesProvider>
    </ThemeProvider>
  );
};

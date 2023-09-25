export { STR_TXT } from './strings';
export const THEME = {
  dark: 'dark',
  light: 'light',
  dataTheme: 'data-theme',
  changeMode(mode) {
    return mode === this.light ? this.dark : this.light;
  },
  isDark(mode) {
    return mode === this.dark;
  },
};

export const filterByRegion = (countries, region) => {
  if (region === '' || region === 'all') return countries;
  return countries.filter((country) => country.region.toLowerCase() === region.toLowerCase());
};

export const filterByCountry = (countries, countryName) => {
  if (countryName === '') return countries;
  return countries.filter((country) => country.name.common.toLowerCase().includes(countryName));
};

export const isEmpty = (array = []) => array.length === 0;

export const routeInfoCountry = (countryName) =>
  `/challenge-chaindots/info-country/${countryName.replaceAll(' ', '_')}`;

export const ROUTES = {
  home: '/challenge-chaindots',
  info: '/challenge-chaindots/info-country/:nameCountry',
  other: '*',
};

export const INIT_VALUE = {
  data: [],
  loading: true,
};

export const isFrontend = () => typeof window !== 'undefined';

export const getItemLocalStorage = (key, initialValue) => {
  try {
    if (isFrontend()) {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
  } catch (error) {
    return initialValue;
  }
};

export const selectedOption = (listRegions, regionToFilter) =>
  listRegions.filter(function (option) {
    return option.value === regionToFilter;
  });

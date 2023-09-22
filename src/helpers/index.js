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

export const HOME = '/challenge-chaindots';
export const INFO_COUNTRY = '/challenge-chaindots/info-country/:name';

export const INIT_VALUE = {
  data: [],
  loading: true,
};

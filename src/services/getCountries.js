const API_URL = import.meta.env.VITE_API_URL;
const API_ROUTES = {
  all: 'all',
  codeCountry(codes) {
    return `alpha?codes=${codes}`;
  },
  fullName(name) {
    return `name/${name}?fullText=true`;
  },
};

export const getCountries = async () => {
  const resp = await fetch(API_URL + API_ROUTES.all);
  const data = await resp.json();
  return data;
};

export const getCountry = async (codeCountry) => {
  const resp = await fetch(API_URL + API_ROUTES.codeCountry(codeCountry));
  const data = await resp.json();
  return data;
};

export const getCountryByName = async (name) => {
  const resp = await fetch(API_URL + API_ROUTES.fullName(name));
  const data = await resp.json();
  return data;
};

const API_URL = import.meta.env.VITE_API_URL;
export const getCountries = async () => {
  const resp = await fetch(API_URL + 'all');
  const data = await resp.json();
  return data;
};

export const getCountry = async (codeCountry) => {
  const resp = await fetch(API_URL + `alpha?codes=${codeCountry}`);
  const data = await resp.json();
  return data;
};

const API_URL = import.meta.env.VITE_API_URL;
export const getCountries = async () => {
  const resp = await fetch(API_URL + 'independent?status=true');
  const data = await resp.json();
  return data;
};

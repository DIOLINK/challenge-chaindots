import { GridCards, Layout, Search } from '@/components';
import { useCountries } from '@/contexts/CountriesContext';

export const HomePage = () => {
  const { countries } = useCountries();
  return (
    <Layout>
      <Search />
      <GridCards items={countries} />
    </Layout>
  );
};

import { GridCards, Layout, Search } from '@/components';
import { useFetchCountries } from '@/hook/useFetchCountries';

export const HomePage = () => {
  const { data: countries } = useFetchCountries();
  return (
    <Layout>
      <Search />
      <GridCards items={countries} />
    </Layout>
  );
};

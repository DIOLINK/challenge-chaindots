import { GridCards, Layout } from '@/components';
import { useFetchCountries } from '@/hook/useFetchCountries';

export const HomePage = () => {
  const { data: countries } = useFetchCountries();
  return (
    <Layout>
      <GridCards items={countries} />
    </Layout>
  );
};

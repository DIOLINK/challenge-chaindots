import { GridCards, Layout, Search, SelectRegion } from '@/components';
import './home.module.css';
export const HomePage = () => {
  return (
    <Layout>
      <section>
        <Search />
        <SelectRegion />
      </section>
      <GridCards />
    </Layout>
  );
};

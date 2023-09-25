import { Providers } from '@/contexts/index';
import { AppRouter } from '@/routers';
import '@/styles/index.css';

function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;

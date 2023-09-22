import { CountryProvider } from '@/contexts/CounterContext';
import { CountriesProvider } from '@/contexts/CountriesContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { HOME, INFO_COUNTRY } from '@/helpers';
import '@/styles/index.css';
import { ErrorPage, HomePage, InfoCountry } from '@/views';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: HOME, element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: INFO_COUNTRY,
    index: true,
    element: <InfoCountry />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <CountriesProvider>
        <CountryProvider>
          <RouterProvider router={router} />
        </CountryProvider>
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;

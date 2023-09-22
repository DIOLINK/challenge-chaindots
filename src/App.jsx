import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/styles/index.css';
import { ErrorPage, HomePage, InfoCountry } from '@/views';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CountriesProvider } from './contexts/CountriesContext';
import { HOME, INFO_COUNTRY } from './helpers';

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
        <RouterProvider router={router} />
      </CountriesProvider>
    </ThemeProvider>
  );
}

export default App;

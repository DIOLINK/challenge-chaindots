import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/styles/index.css';
import { ErrorPage, HomePage } from '@/views';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CountriesProvider } from './contexts/CountriesContext';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
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

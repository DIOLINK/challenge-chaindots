import { ThemeProvider } from '@/contexts/ThemeContest';
import '@/styles/index.css';
import { ErrorPage, HomePage } from '@/views';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  { path: '/', element: <HomePage />, errorElement: <ErrorPage /> },
]);
function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

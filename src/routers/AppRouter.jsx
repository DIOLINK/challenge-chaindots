import { ROUTES } from '@/helpers/index';
import { ErrorPage, HomePage, InfoCountry } from '@/views/index';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={ROUTES.home} element={<HomePage />} errorElement={<ErrorPage />} />
          <Route path={ROUTES.info} element={<InfoCountry />} errorElement={<ErrorPage />} />
          <Route path={ROUTES.other} element={<Navigate to={ROUTES.home} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

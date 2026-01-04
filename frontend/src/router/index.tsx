// Rutas principales exportadas
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { dashboardRoutes } from './dashboardRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      {authRoutes}
      {dashboardRoutes}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
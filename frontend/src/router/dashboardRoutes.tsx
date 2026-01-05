import { Route } from 'react-router-dom';
import Dashboard from '../app/dashboard/dashboard';
// import SkillDetail from '../app/skills/SkillDetail';
// import Profile from '../app/profile/Profile';
// import Stats from '../app/stats/Stats';
import ProtectedRoute from './ProtectedRoute';

export const dashboardRoutes = (
  <>
    { 
    <Route 
      path="/dashboard" 
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } 
    />
    }
  </>
);
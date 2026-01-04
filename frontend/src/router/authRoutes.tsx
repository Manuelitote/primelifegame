// Rutas de autenticación

import { Route } from 'react-router-dom';
import Login from '../app/auth/Login';
import Register from '../app/auth/Register';

export const authRoutes = (
  <>
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
  </>
);
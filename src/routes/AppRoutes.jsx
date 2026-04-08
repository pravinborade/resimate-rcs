import { Routes, Route } from 'react-router-dom';
import Login from '@/pages/login';
import Dashboard from '@/pages/dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
import React from 'react';
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Redirecting any non-mapped routes to login */}
          <Route path="*" element={<Navigate to={'login'} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

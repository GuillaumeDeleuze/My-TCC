import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/HomePage';
import ThemePage from '../Pages/ThemePage';
import AuthenticationPage from '../Pages/AuthenticationPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/theme/:themeId" element={<ThemePage />} />
        <Route path="/auth" element={<AuthenticationPage type="signup" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

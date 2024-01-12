import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../Pages/HomePage';
import ThemePage from '../Pages/ThemePage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/themepage" element={<ThemePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

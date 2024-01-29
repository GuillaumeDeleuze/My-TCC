import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Homepage from '../Pages/HomePage';
import ThemePage from '../Pages/ThemePage';
import ExercisePage from '../Pages/ExercisePage';
import AuthenticationPage from '../Pages/AuthenticationPage';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/themes" element={<Homepage />} />
        <Route path="/theme/:themeId" element={<ThemePage />} />
        <Route path="/exercise/:exerciseId" element={<ExercisePage />} />
        <Route path="/auth" element={<AuthenticationPage type="signup" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

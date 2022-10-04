import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/results" element={<Results />} />
    </Routes>
  );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Home from './pages/Home/Home';
import OndeDescartar from './pages/OndeDescartar/OndeDescartar';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/onde-descartar" element={<OndeDescartar />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import style from './OndeDescartar.module.css';

import SearchForm from '../../components/SearchForm/SearchForm';
import ResultsList from '../../components/ResultsList/ResultsList';

const OndeDescartar = () => {
  const [isFiltered, setIsFiltered] = useState(false);

  const queryParams = new URLSearchParams(window.location.search);

  const userSelectedCategories = queryParams.get('categories') ? queryParams.get('categories').split(',') : [];
  const userCoordinates = queryParams.get('lat') ? [queryParams.get('lat'), queryParams.get('lng')] : [];

  const userAddress = queryParams.get('address') ? queryParams.get('address') : '';
  const userZipCode = queryParams.get('zipCode') ? queryParams.get('zipCode') : '';

  useEffect(() => {
    if (userSelectedCategories.length > 0 || userZipCode.length > 0 || userAddress.length > 0 || userCoordinates.length > 0) {
      setIsFiltered(true);
    }
  }, []);

  return (
    <main class="main">
      <section className={style.hero}>
        <div className="container">
          <h1 className="display">Onde descartar?</h1>
          <div className={style.hero__form}>
            <SearchForm userZipCode={userZipCode} userSelectedCategories={userSelectedCategories} />
          </div>
        </div>
      </section>

      <section className={style.archive}>
        <div className="container">
          {isFiltered && <ResultsList userSelectedCategories={userSelectedCategories} userCoordinates={userCoordinates} />}
          {!isFiltered && <p className={style.archive__message}>Preencha o filtro e mostraremos os locais próximos a você! .</p>}
        </div>
      </section>
    </main>
  );
};

export default OndeDescartar;

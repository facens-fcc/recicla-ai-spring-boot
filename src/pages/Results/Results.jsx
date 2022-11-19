import React from 'react';
import style from './Results.module.css';

import CallToAction from '../../components/CallToAction/CallToAction';
import SearchForm from '../../components/SearchForm/SearchForm';
import ResultsList from '../../components/ResultsList/ResultsList';

const Results = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const userSelectedCategories = queryParams.get('categories').split(',');
  const userCoordinates = [queryParams.get('lat'), queryParams.get('lng')];

  const userAddress = queryParams.get('address');
  const userZipCode = queryParams.get('zipCode');

  return (
    <main>
      <section className={style.hero}>
        <div className="container">
          <h2 className={style.results__title}>Resultados da busca</h2>
          <p>{userAddress}</p>
          <SearchForm userSelectedCategories={userSelectedCategories} userZipCode={userZipCode} />
        </div>
      </section>

      <section className={style.archive}>
        <div className="container">
          <ResultsList userSelectedCategories={userSelectedCategories} userCoordinates={userCoordinates} />
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default Results;

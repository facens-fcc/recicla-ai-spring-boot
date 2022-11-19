import React from 'react';
import style from './Results.module.css';

import CallToAction from '../../components/CallToAction/CallToAction';
import ResultsList from '../../components/ResultsList/ResultsList';

const Results = () => {
  return (
    <main>
      <section className={style.results}>
        <div className="section--light-grey-color">
          <h2 className={style.results__title}>Resultados da busca</h2>
        </div>
        <div className="container">
          <ResultsList />
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default Results;

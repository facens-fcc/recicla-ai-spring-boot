import React from 'react';
import style from './Results.module.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import CallToAction from '../../components/CallToAction/CallToAction';
import ResultsSidebar from '../../components/ResultsSidebar/ResultsSidebar';
import ResultsFeed from '../../components/ResultsFeed/ResultsFeed';

const Results = () => {
  return (
    <div>
      <Header />
      <main>
        <section className={style.results}>
          <div className="section--light-grey-color">
            <h2 className={style.results__title}>Resultados da busca</h2>
          </div>
          <div className="container">
            <div className={style.results__wrapper}>
              <ResultsSidebar />
              <ResultsFeed />
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Results;

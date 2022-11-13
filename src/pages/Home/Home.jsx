import React from 'react';
import style from './Home.module.css';

import CallToAction from '../../components/CallToAction/CallToAction';
import SearchForm from '../../components/SearchForm/SearchForm';

const Home = () => {
  return (
    <main>
      <section className={style.hero}>
        <div className={`${style.heroContainer} container`}>
          <div className={style.heroContent}>
            <h1 className="visually-hidden">Descubra onde descatar lixos eletrônicos em Sorocaba</h1>
            <h2 className={style.heroTitle}>
              Use e recicle. <br /> Nao desperdice!
            </h2>
            <span className={style.heroSubtitle}>Eletrônicos & Eletrodométiscos</span>
          </div>
          <div className={style.heroSearch}>
            <SearchForm />
          </div>
        </div>
      </section>

      <CallToAction />
    </main>
  );
};

export default Home;

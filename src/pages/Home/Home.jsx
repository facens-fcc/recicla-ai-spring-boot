import React from 'react';
import style from './Home.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import earth from '../../assets/earth.png';

const Home = () => {
  return (
    <main>
      <section className={style.hero}>
        <div className="container">
          <div className={style.hero__content}>
            <h1 className="visually-hidden">Descubra onde descatar lixos eletrônicos em Sorocaba</h1>
            <h2 className={`${style.hero__title} display`}>
              Use e recicle, <br /> Não desperdice!
            </h2>
          </div>
          <div className={style.hero__form}>
            <SearchForm />
          </div>
        </div>
      </section>

      <section className={style.quote}>
        <figure>
          <blockquote className={`${style.quote__text} display`} cite="https://www.theworldcounts.com/challenges/waste/electronic-waste-facts">
            Mais de <span className={style.quote__text__highlight}>80%</span> dos lixos eletrônicos e eletrodométiscos não são reciclados
          </blockquote>
          <figcaption>
            —<cite className={style.quote__source}>World Economic Forum</cite>
          </figcaption>
        </figure>
        <h2></h2>
      </section>

      <section className={style.worldCount}>
        <h2 className={`${style.worldCount__title} display`}>Toneladas de lixo eletrônico são jogadas fora no mundo todo</h2>
        <p className={`${style.worldCount__text} display`}>...sendo mais preciso</p>
        <p className={`${style.worldCount__number} display display--large`}>44.160.970t</p>
        <div className={style.worldCount__earth}>
          <img className={style.worldCount__earth__image} src={earth} alt="Imagem do planeta Terra" loading="lazy" />
          <p className={`${style.worldCount__earth__text} display`}>A mudança começa por você</p>
        </div>
      </section>

      <section className={style.benefits}>
        <div className="container">
          <ul className={style.benefits__list}>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve o meio ambiente</h2>
              <p>Reduzindo a extracão de matéria prima para utilização nas indústrias.</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve dinheiro</h2>
              <p>Promovendo a ecônomia</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve espaço</h2>
              <p>Conservando recursos e energia</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve vidas</h2>
              <p>Evitando a contaminação</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve o futuro</h2>
              <p>Preservando o planeta</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Beneficie a sua comunidade</h2>
              <p>Contribuindo para o bem-estar</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;

import React from 'react';
import style from './Home.module.css';
import SearchForm from '../../components/SearchForm/SearchForm';
import earth from '../../assets/earth.png';

const Home = () => {
  return (
    <main class="main">
      <section className={style.hero}>
        <div className="container">
          <h1 className="visually-hidden">Descubra onde descatar lixos eletrônicos em Sorocaba</h1>
          <h2 className="display">
            Use e recicle, <br /> Não desperdice!
          </h2>
          <div className={style.hero__form}>
            <SearchForm />
          </div>
        </div>
      </section>

      <section className={style.whyRecycle} id="por-que-reciclar">
        <figure className={style.whyRecycle__quote}>
          <blockquote className={`${style.whyRecycle__quote__content} display`} cite="https://www.theworldcounts.com/challenges/waste/electronic-waste-facts">
            Mais de <span className={style.whyRecycle__quote__highlight}>80%</span> dos lixos eletrônicos e eletrodométiscos não são reciclados
          </blockquote>
          <figcaption className={style.whyRecycle__quote__source}>
            —<cite>World Economic Forum</cite>
          </figcaption>
        </figure>
        <h2></h2>
      </section>

      <section className={style.worldCount}>
        <figure className={style.worldCount__quote}>
          <blockquote className={style.quote__content} cite="https://www.theworldcounts.com/challenges/waste/electronic-waste-facts">
            <p className={`${style.worldCount__quote__title} display`}>Toneladas de lixo eletrônico são jogadas fora no mundo todo</p>
            <p className={`${style.worldCount__quote__text} display`}>...sendo mais preciso</p>
            <p className={`${style.worldCount__quote__number} display display--large`}>50.000.000t</p>
          </blockquote>
          <figcaption className={style.worldCount__quote__source}>
            <cite>— Fonte: The World Counts</cite>
          </figcaption>
        </figure>
        <div className={style.worldCount__earth}>
          <img className={style.worldCount__earth__image} src={earth} alt="Imagem do planeta Terra" loading="lazy" />
          <p className={`${style.worldCount__earth__text} display`}>A mudança começa por você</p>
        </div>
      </section>

      <section className={style.benefits}>
        <div className="container container--narrow">
          <ul className={style.benefits__list}>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve o meio ambiente</h2>
              <p className={style.benefits__item__description}>Reduzindo a extracão de matéria prima para utilização nas indústrias.</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve dinheiro</h2>
              <p className={style.benefits__item__description}>Promovendo a ecônomia</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve espaço</h2>
              <p className={style.benefits__item__description}>Conservando recursos e energia</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve vidas</h2>
              <p className={style.benefits__item__description}>Evitando a contaminação</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Salve o futuro</h2>
              <p className={style.benefits__item__description}>Preservando o planeta</p>
            </li>
            <li className={style.benefits__item}>
              <h2 className="heading">Beneficie a sua comunidade</h2>
              <p className={style.benefits__item__description}>Contribuindo para o bem-estar</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;

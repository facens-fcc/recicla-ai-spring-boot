import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Input from '../../components/Input/Input';

import CallToAction from '../../components/CallToAction/CallToAction';
import FeaturedServices from '../../components/FeaturedServices/FeaturedServices.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="section section--light-grey-color">
          <div className="container">
            <div className="stack">
              <h1 className="heading heading--large">Descubrar lugares para descartar lixos eletrônicos e eletrodométiscos em Sorocaba</h1>
              <div className="box">
                <form className="form form--horizontal" action="/resultados" method="GET">
                  <div className="form__item stack stack--small">
                    <Input label="O que você deseja descartar?" id="search" name="search" type="text" placeholder="Ex: pilhas, baterias, lâmpadas, etc." required />
                    <p className="text text--small text--gray-color">Digite o que você deseja descartar e clique em "Buscar"</p>
                  </div>
                  <Input label="Onde você está?" id="location" name="location" type="text" placeholder="Ex: Rua São Paulo, 123" required />
                  <button className="button button--primary" type="submit">
                    Buscar por locais
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <FeaturedServices />

        <section className="section section--light-grey-color">
          <div className="container">
            <div className="stack">
              <div className="grid">
                <div className="col">
                  <picture>
                    <img src="https://source.unsplash.com/random/?Green/480x510" alt="" loading="lazy" width="480" height="510" />
                  </picture>
                </div>
                <div className="col">
                  <div className="content">
                    <h2 className="heading heading--large">O que são classificados como lixos eletrônicos?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                    <a className="button button--primary" href="/">
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

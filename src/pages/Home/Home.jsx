import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <div>
      <Header />

      <section className="section">
        <div className="container">
          <div className="stack">
            <div className="content content--center">
              <h2 className="overline overline--center">Lixos eletrônicos</h2>
              <p className="headline headline--md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className="grid">
              <div className="col">
                <Card title="Pilhas e baterias" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." image="https://source.unsplash.com/random/400x300" />
              </div>
              <div className="col">
                <Card title="Pilhas e baterias" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." image="https://source.unsplash.com/random/400x300" />
              </div>
              <div className="col">
                <Card title="Pilhas e baterias" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." image="https://source.unsplash.com/random/400x300" />
              </div>
            </div>
            <div className="content content--center">
              <Button variant="primary" href="/">
                Buscar por todos os tipos de lixos
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'gainsboro' }}>
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
                  <h2 className="headline headline--md">O que são classificados como lixos eletrônicos?</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                  <Button variant="primary" href="/">
                    Saiba mais
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container container--narrow">
          <div className="stack">
            <div className="content content--center">
              <h2 className="headline headline--md">O que são classificados como lixos eletrônicos?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
              <Button variant="secondary" href="/">
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

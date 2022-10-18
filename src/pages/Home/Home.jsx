import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import CallToAction from '../../components/CallToAction/CallToAction';
import FeaturedServices from '../../components/FeaturedServices/FeaturedServices.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
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

import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';

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
                    <Heading level="h2" size="lg">
                      O que são classificados como lixos eletrônicos?
                    </Heading>
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
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

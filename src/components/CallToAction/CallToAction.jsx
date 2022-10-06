import React from 'react';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';

const CallToAction = () => {
  return (
    <section className="section section--primary-color">
      <div className="container container--narrow">
        <div className="stack">
          <div className="content content--center">
            <Heading level="h2" size="lg">
              O que são classificados como lixos eletrônicos?
            </Heading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
            <Button variant="secondary" href="/">
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

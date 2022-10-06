import React from 'react';
import Card from '../Card/Card';
import Overtitle from '../Overtitle/Overtitle';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import services from '../../data/services.json';

const FeaturedServices = () => {
  const featuredServices = services.filter((company) => company.featured);

  return (
    <section className="section">
      <div className="container">
        <div className="stack">
          <div className="content content--center">
            <Overtitle level="h2">Lixos eletrônicos</Overtitle>
            <Heading level="p" size="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </Heading>
          </div>
          <div className="grid">
            {featuredServices.map(({ id, name, logo, description }) => (
              <div className="col">
                <Card key={id} title={name} logo={logo} description={description} />
              </div>
            ))}
          </div>
          <div className="content content--center">
            <Button variant="primary" href="/">
              Buscar por todos os tipos de lixos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;

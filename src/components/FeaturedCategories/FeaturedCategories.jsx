import React from 'react';
import Card from '../Card/Card';
import categories from '../../data/categories.json';

const FeaturedCategories = () => {
  const featuredCategories = categories.filter((company) => company.featured);

  return (
    <section className="section">
      <div className="container">
        <div className="stack">
          <div className="content content--center">
            <h2 className="overtitle">Lixos eletrônicos</h2>
            <p className="headline headline--large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className="grid">
            {featuredCategories.map(({ id, label, logo, description }) => (
              <div className="col" key={id}>
                <Card id={id} title={label} logo={logo} description={description} />
              </div>
            ))}
          </div>
          <div className="content content--center">
            <a className="button button--primary" href="/">
              Buscar por todos os tipos de lixos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;

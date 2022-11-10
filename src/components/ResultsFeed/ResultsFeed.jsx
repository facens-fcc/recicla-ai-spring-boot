import React from 'react';

import companies from '../../data/companies.json';
import categories from '../../data/categories.json';

import style from './ResultsFeed.module.css';

const ResultsFeed = () => {
  // Filter companies by category based on the URL query string

  const urlParams = new URLSearchParams(window.location.search);

  const category = urlParams.get('category');

  const filteredCompanies = companies.filter((company) => company.category === category);

  return (
    <div className={style.results__feed}>
      {filteredCompanies.map(({ id, name, logo, description }) => (
        <div className={style.results__feed__item} key={id}>
          <div className={style.results__feed__item__content}>
            <h3 className={style.results__feed__item__content__title}>{name}</h3>
            <p className={style.results__feed__item__content__description}>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsFeed;

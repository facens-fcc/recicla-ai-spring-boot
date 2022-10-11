import React from 'react';
import ResultsCard from '../ResultsCard/ResultsCard.jsx';
import companies from '../../data/companies.json';
import style from './ResultsFeed.module.css';

const ResultsFeed = () => {
  // Show console mensage when resize and screen is larger than 768px

  window.addEventListener('resize', function(event) {console.log('ta mudando de tamanho');

  return (
    <div className={style.resultsFeed}>
      <div className={style.resultsFeed__record}>4 resultados encontrados</div>
      <ul className={style.resultsFeed__list}>
        {companies.map((company) => {
          return (
            <li key={company.id}>
              <ResultsCard company={company} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultsFeed;

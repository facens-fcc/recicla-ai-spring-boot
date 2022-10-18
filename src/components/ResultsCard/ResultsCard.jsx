import React from 'react';
import style from './ResultsCard.module.css';
import Card from '../Card/Card';

const ResultsCard = ({ company }) => {
  const { name, services } = company;

  return (
    <Card>
      <div className={style.resultsFeed__card}>
        <div className={style.resultsFeed__card__header}>
          <h3 className={style.resultsFeed__card__title}>{name}</h3>
          <p className={style.resultsFeed__card__distance}>4km de distância</p>
        </div>
        <ul className={style.resultsFeed__card__services}>
          {services.plastic && <li className={style.resultsFeed__card__service}>Pequenos eletrodomésticos</li>}
          {services.plastic && <li className={style.resultsFeed__card__service}>Eletrodomésticos de grande porte</li>}
          {services.plastic && <li className={style.resultsFeed__card__service}>Aparelhos telefones e disposíveis móveis</li>}
          {services.plastic && <li className={style.resultsFeed__card__service}>Carregadores, cabos e fios</li>}
          {services.plastic && <li className={style.resultsFeed__card__service}>Acessórios de celulares</li>}
          {services.plastic && <li className={style.resultsFeed__card__service}></li>}
        </ul>
        <div className={style.resultsFeed__card__footer}>
          <a className="button button--primary" href="/">
            Ver mais
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ResultsCard;

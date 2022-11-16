import React from 'react';
import style from './Card.module.css';

const Card = ({ name, street, city, state, distance }) => {

  return (
    <div className={style.card}>
      <h3 className={style.card__title}>{name}</h3>
      <p>{street}, {city}, {state}</p>
      <p>{distance} km</p>
    </div>
  );
};

export default Card;

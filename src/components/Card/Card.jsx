import React from 'react';
import style from './Card.module.css';

const Card = ({ name, address }) => {
  return (
    <div className={style.card}>
      <h3 className={style.card__title}>{name}</h3>
      <p>{address.street}, {address.city}, {address.state}</p>
      <p>{address.distance} km</p>
    </div>
  );
};

export default Card;

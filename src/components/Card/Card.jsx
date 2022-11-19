import React from 'react';
import style from './Card.module.css';

const Card = ({ company }) => {
  const { name, address, categories, distance } = company;

  return (
    <div className={style.card}>
      <h3 className={style.card__title}>{name}</h3>
      <p>{address.distance.toFixed(2)}km</p>
      <p>
        {address.street}, {address.city}, {address.state}
      </p>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;

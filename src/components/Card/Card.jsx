import React from 'react';
import style from './Card.module.css';

const Card = ({ title, description, image }) => {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <img className={style.image} src={image} alt={title} />
      </div>
      <div className={style.body}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
        <a className={style.button} href="/">
          Ver locais de descarte →
        </a>
      </div>
    </div>
  );
};

export default Card;

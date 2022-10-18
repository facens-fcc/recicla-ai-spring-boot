import React from 'react';
import style from './Card.module.css';

const Card = ({ title, description, image, link }) => {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <img className={style.image} src={image} alt={title} />
      </div>
      <div className={style.body}>
        <div className="stack stack--xm">
          <h2 className="heading heading--small">{title}</h2>
          <p>{description}</p>
          <a className="link link--highlight" href={link}>
            Ver locais de descarte →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

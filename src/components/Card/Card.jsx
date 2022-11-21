import React from 'react';
import style from './Card.module.css';

import iconEnvironment from '../../assets/environment.svg';

const Card = ({ company }) => {
  const { name, address, whatsapp, phone } = company;

  return (
    <li className={style.card}>
      <div className={style.card__header}>
        <h3 className={`${style.card__title} heading`}>{name}</h3>
        <p>{address.distance < 1 ? `${Math.round(address.distance * 1000)}m` : `${address.distance.toFixed(2)}km`} de distância</p>
        <p>
          {address.street}, {address.city}, {address.state}
        </p>
      </div>
      <div className={style.card__body}>
        <ul className="checklist checklist--black">
          <li>Remuneração</li>
          <li>Coleta residencial</li>
          <li>Coleta seletiva</li>
        </ul>
      </div>
      <div className={style.card__footer}>
        <a className="link" href={`https://www.google.com/maps/search/?api=1&query=${address.lat},${address.lng}`} target="_blank" rel="noreferrer">
          <img className="icon" src={iconEnvironment} alt="Icone de localização" />
          Ver no mapa
        </a>
        {whatsapp ? (
          <a className="button" href={`https://api.whatsapp.com/send?phone=55${phone}`} target="_blank" rel="noreferrer">
            Abrir WhatsApp
          </a>
        ) : (
          <a className="button" href={`tel:${phone}`} target="_blank" rel="noreferrer">
            Entrar em contato
          </a>
        )}
      </div>
    </li>
  );
};

export default Card;

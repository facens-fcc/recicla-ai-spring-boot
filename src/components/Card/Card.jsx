import React from 'react';
import style from './Card.module.css';

import iconEnvironment from '../../assets/environment.svg';

const Card = ({ company }) => {
  const { name, address, whatsapp, phone, payment, residential_collection, selective_collection } = company;

  const formatPhone = (phone) => {
    const cleanPhone = phone ? phone.replace(/\D/g, '') : '';

    if (!cleanPhone.startsWith('0800')) {
      return `55${cleanPhone}`;
    }

    return cleanPhone;
  };

  console.log(phone);

  return (
    <li className={style.card}>
      <div className={style.card__header}>
        <h3 className={`${style.card__title} heading`}>{name}</h3>
        <p>{address.distance < 1 ? `${Math.round(address.distance * 1000)}m` : `${address.distance.toFixed(2)}km`} de distância</p>
        <p>
          {address.street}, {address.city}, {address.state}
        </p>
        {phone && (
          <p>
            <a className="link" href={`tel:${formatPhone(phone)}`}>
              {phone}
            </a>
          </p>
        )}
      </div>
      <div className={style.card__body}>
        <ul className="checklist checklist--black">
          {payment && <li>Coleta remunerada</li>}
          {residential_collection && <li>Coleta residencial</li>}
          {selective_collection && <li>Coleta seletiva</li>}
        </ul>
      </div>
      <div className={style.card__footer}>
        <a className="link" href={`https://www.google.com/maps/search/?api=1&query=${address.lat},${address.lng}`} target="_blank" rel="noreferrer">
          <img className="icon" src={iconEnvironment} alt="Icone de localização" />
          Ver no mapa
        </a>
        {whatsapp ? (
          <a className="button" href={`https://api.whatsapp.com/send?phone=${formatPhone(phone)}`} target="_blank" rel="noreferrer">
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

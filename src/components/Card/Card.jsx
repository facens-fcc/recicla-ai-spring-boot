import React from 'react';
import style from './Card.module.css';

import categoriesData from '../../data/categories.json';

import iconEnvironment from '../../assets/environment.svg';
import Button from '../Button/Button.jsx';

const Card = ({ company }) => {
  const { name, address, phone, whatsapp, payment, residential_collection, categories } = company;

  // Show all categories icons that the company has
  // Compare categories using the label property.
  const categoriesList = categories.map((category) => {
    const categoryData = categoriesData.find((item) => item.label === category);
    return (
      <li className={style.card__categories__item} key={categoryData.label}>
        <figure className={style.card__categories__icon} aria-label={categoryData.label} tabIndex="0">
          <svg viewBox="0 0 28 28" aria-label={categoryData.label} role="img">
            <use href={`${categoryData.icon}#root`} />
          </svg>
        </figure>
      </li>
    );
  });

  /**
   * Format phone number to a better looking format.
   * Expected format: (00) 00000-0000 or 00000 000 000
   */

  const formatPhone = (phone) => {
    if (!phone) return;
    if (phone.ddi && phone.ddd) {
      return `(${phone.ddd}) ${phone.number.slice(0, 4)}-${phone.number.slice(4, 8)}`;
    }
    return `${phone.number.slice(0, 4)} ${phone.number.slice(4, 7)} ${phone.number.slice(7, 11)}`;
  };

  /**
   * Create a link to WhatsApp with the company's phone number.
   * Expected format: https://api.whatsapp.com/send?phone=00000000000
   */

  const formatLinkWhatsApp = (phone) => {
    if (!phone) return;
    if (phone.ddi && phone.ddd) {
      return `https://wa.me/${phone.ddi}${phone.ddd}${phone.number}`;
    }
    return `https://wa.me/${phone.number}`;
  };

  /**
   * Create a link to call the company's phone number.
   * Expected format: tel:00000000000
   */

  const formatLinkPhone = (phone) => {
    if (!phone) return;
    if (phone.ddi && phone.ddd) {
      return `tel:${phone.ddi}${phone.ddd}${phone.number}`;
    }
    return `tel:${phone.number}`;
  };

  /**
   * Create a link to Google Maps with the company's address.
   * Expected format: https://www.google.com/maps/search/?api=1&query=FormattedAddress
   */

  const getMapsUrl = (address) => {
    const { street, number, neighborhood, city, state, zip_code } = address;
    const url = new URL('https://www.google.com/maps/search/?api=1');

    url.searchParams.set('query', `${street}, ${number}, ${neighborhood}, ${city}, ${state}, ${zip_code}`);
    return url;
  };

  return (
    <li className={style.card}>
      <div className={style.card__header}>
        <div className={style.card__company}>
          <h3 className={style.card__company__title}>{name}</h3>
          <p className={style.card__company__distance}>{address.distance < 1 ? `${Math.round(address.distance * 1000)}m` : `${Math.round(address.distance * 10) / 10}km`} de distância</p>
        </div>
        <div className={style.card__contact}>
          <p className={style.card__contact__address}>
            {address.street}, {address.number} | {address.city}/{address.state}
          </p>
          <a className={style.card__contact__phone} href={formatLinkPhone(phone)} title={`Ligar para ${formatPhone(phone)}`}>
            {formatPhone(phone)}
          </a>
        </div>
      </div>
      <div className={style.card__body}>
        {payment && residential_collection && (
          <ul className={`${style.card__extraInfo} checklist checklist--black`}>
            {payment && <li>Possibilidade de pagamento em troca do lixo descartado</li>}
            {residential_collection && <li>Retirada em residência (a consultar)</li>}
          </ul>
        )}
        <div className={style.card__categories}>
          <h4 className={style.card__categories__label}>Tipos de lixo que a empresa coleta:</h4>
          <ul className={style.card__categories__list}>{categoriesList}</ul>
        </div>
      </div>
      <div className={style.card__footer}>
        <div className={style.card__links}>
          <a className="link" href={getMapsUrl(address)} target="_blank" rel="noreferrer">
            <img className="icon" src={iconEnvironment} alt="Icone de localização" aria-hidden="true" />
            Ver no mapa
          </a>
        </div>
        <div className={style.card__buttons}>
          {whatsapp && (
            <Button variant="outline" href={formatLinkWhatsApp(phone)} target="_blank" rel="noreferrer">
              WhatsApp
            </Button>
          )}
          {phone && (
            <Button variant="orange" href={formatLinkWhatsApp(phone)} target="_blank" rel="noreferrer">
              Ligar
            </Button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Card;

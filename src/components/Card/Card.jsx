import React from 'react';
import style from './Card.module.css';

import iconEnvironment from '../../assets/environment.svg';

const Card = ({ company }) => {
  const { name, address, whatsapp, phone, payment, residential_collection } = company;

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
        <h3 className={`${style.card__title} heading`}>{name}</h3>
        <p>{address.distance < 1 ? `${Math.round(address.distance * 1000)}m` : `${Math.round(address.distance * 10) / 10}km`} de distância</p>
        <a className="link" href={getMapsUrl(address)} title="Ver endereço no Google Maps">
          <img className="icon" src={iconEnvironment} alt="Icone de localização" aria-hidden="true" />
          {address.street}, {address.number} | {address.city}/ {address.state}
        </a>
        <a className="link" href={formatLinkPhone(phone)} title={`Ligar para ${formatPhone(phone)}`}>
          <img className="icon" src={iconEnvironment} alt="Icone de localização" aria-hidden="true" />
          {formatPhone(phone)}
        </a>
      </div>
      <div className={style.card__body}>
        <ul className={`${style.card__list} checklist checklist--black`}>
          {payment && <li>Possibilidade de pagamento em troca do lixo descartado</li>}
          {residential_collection && <li>Retirada em residência (a consultar)</li>}
        </ul>
      </div>
      <div className={style.card__footer}>
        <a className="link" href={getMapsUrl(address)} target="_blank" rel="noreferrer">
          <img className="icon" src={iconEnvironment} alt="Icone de localização" aria-hidden="true" />
          Ver no mapa
        </a>
        {whatsapp && (
          <a className="button" href={formatLinkWhatsApp(phone)} target="_blank" rel="noreferrer">
            Abrir WhatsApp
          </a>
        )}
        {phone && !whatsapp && (
          <a className="button" href={formatLinkPhone(phone)}>
            Fazer ligação
          </a>
        )}
      </div>
    </li>
  );
};

export default Card;

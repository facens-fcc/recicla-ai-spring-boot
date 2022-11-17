import React, { useState, useEffect } from 'react';
import style from './Results.module.css';

import Companies from '../../data/companies.json';

import CallToAction from '../../components/CallToAction/CallToAction';
import Card from '../../components/Card/Card';

const Results = () => {
  const queryParams = new URLSearchParams(window.location.search);
  
  const [filteredCompanies, setFilteredCompanies] = useState(Companies);

  const originCoordinates = [queryParams.get('lat'), queryParams.get('lng')];
  const categories = [queryParams.get('category')].flatMap(category => category.split(","));
  console.log(categories);

    // const companyCategories = Companies.map(company => {
    //   const entries = Object.entries(company.categories);
    //   const values = entries.filter(value => value[1] === true);
    //   return company;
    // })

    // console.log(companyCategories)

  /**
   * Calculates the distance between two points in km using the Haversine formula.
   * @param {Array} origin - [lat, lng]
   * @link https://www.movable-type.co.uk/scripts/latlong.html
   */

  const calculateDistance = (origin, destination) => {
    const toRad = (value) => (value * Math.PI) / 180; // Converts numeric degrees to radians
    const R = 6371; // Radius of the earth in km
    const dLat = toRad(destination[0] - origin[0]);
    const dLon = toRad(destination[1] - origin[1]);
    const lat1 = toRad(origin[0]);
    const lat2 = toRad(destination[0]);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  };

  const companiesWithDistance = Companies.map((company) => {
    const companyCoordinates = [company.address.lat, company.address.lng];
    const distance = calculateDistance(originCoordinates, companyCoordinates);
    company.address.distance = distance;
    return company;
  });

  const sortedCompanies = companiesWithDistance.sort((a, b) => a.distance - b.distance);

  return (
    <main>
      <section className={style.results}>
        <div className="section--light-grey-color">
          <h2 className={style.results__title}>Resultados da busca</h2>
        </div>
        <div className="container">
          <div className={style.results__wrapper}>
            {sortedCompanies.map(({ id, name, address }) => (
              <Card key={id}
                name={name}
                street={address.street}
                city={address.city}
                state={address.state}
                distance={address.distance.toFixed(2)}
              />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default Results;

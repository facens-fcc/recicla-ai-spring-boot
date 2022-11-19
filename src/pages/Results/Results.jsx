import React, { useState, useEffect } from 'react';
import style from './Results.module.css';

import Companies from '../../data/companies.json';

import CallToAction from '../../components/CallToAction/CallToAction';
import Card from '../../components/Card/Card';

const Results = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState(Companies);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  const selectedCategories = queryParams.get('category').split(',');
  const userCoordinates = [queryParams.get('lat'), queryParams.get('lng')];

  useEffect(() => {
    setCategories(selectedCategories);
    setCompanies(companiesWithDistance);
  }, []);

  useEffect(() => {
    setFilteredCompanies(filterCompaniesByCategory.sort((a, b) => a.address.distance - b.address.distance));
  }, [companies]);

  /**
   * Calculates the distance between two points in km using the Haversine formula.
   * @param {Array} origin - [lat, lng]
   * @param {Array} destination - [lat, lng]
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

  /**
   * Define the distance between the user and the company.
   * @param {Object} company
   * @param {Array} userCoordinates
   * @returns {Object} company
   */

  const companiesWithDistance = companies.map((company) => {
    const companyCoordinates = [company.address.lat, company.address.lng];
    const distance = calculateDistance(userCoordinates, companyCoordinates);
    company.address.distance = distance;
    return company;
  });

  /**
   * Filter companies by category. If at least one category matches, the company is added to the filteredCompanies array.
   * @param {Array} categories
   * @param {Array} companies
   * @returns {Array} filteredCompanies
   */

  const filterCompaniesByCategory = companies.filter((company) => {
    const companyCategories = company.categories;
    const matches = companyCategories.filter((category) => categories.includes(category));
    return matches.length > 0;
  });

  return (
    <main>
      <section className={style.results}>
        <div className="section--light-grey-color">
          <h2 className={style.results__title}>Resultados da busca</h2>
        </div>
        <div className="container">
          <div className={style.results__wrapper}>
            {filteredCompanies.map((company) => (
              <Card key={company.id} name={company.name} address={company.address} />
            ))}
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default Results;

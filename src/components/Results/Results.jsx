import React, { useState, useEffect } from 'react';
import style from './Results.module.css';

import api from '../../api/api';
// import Companies from '../../data/companies.json';
import Card from '../Card/Card';

const Results = ({ userSelectedCategories = [], userCoordinates = [] }) => {
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/company');
        setCompanies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log(companies)

  useEffect(() => {
    setCategories(userSelectedCategories);
    setCompanies(companiesWithDistance);
  }, []);

  useEffect(() => {
    setFilteredCompanies(filterCompaniesByCategory.sort((a, b) => a.distance - b.distance));
  }, [companies]);

  /**
   * Calculates the distance between two points in km using the Haversine formula.
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
   * Calculates the distance between the user and the company.
   * Sets the distance in the company address object.
   */

  const companiesWithDistance = companies.map((company) => {
    const companyCoordinates = [company.lat, company.lng];
    const distance = calculateDistance(userCoordinates, companyCoordinates);
    company.distance = distance;
    return company;
  });

  /**
   * Filters the companies by the selected categories.
   * If the company has all the selected categories, it is added to the filteredCompanies array.
   */

  const filterCompaniesByCategory = companies.filter((company) => {
    const companyCategories = company.categories;
    const hasAllCategories = categories.every((category) => companyCategories.includes(category));
    return hasAllCategories;
  });

  return (
    <>
      <p className={style.results__counter}>
        Encontramos{' '}
        <strong>
          {filteredCompanies.length} {filteredCompanies.length === 1 ? 'local' : 'locais'}
        </strong>{' '}
        próximos a você!
      </p>
      <ul className={style.results__list}>
        {filteredCompanies.map((company) => (
          <Card key={company.id} company={company} />
        ))}
      </ul>
    </>
  );
};

export default Results;

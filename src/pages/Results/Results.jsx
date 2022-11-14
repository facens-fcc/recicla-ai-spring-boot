import React, { useState, useEffect } from 'react';
import style from './Results.module.css';

import Companies from '../../data/companies.json';

import CallToAction from '../../components/CallToAction/CallToAction';
import ResultsSidebar from '../../components/ResultsSidebar/ResultsSidebar';
import ResultsFeed from '../../components/ResultsFeed/ResultsFeed';

// import Map from '../../components/Map/Map';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Results = () => {

  // const { isLoaded } = useLoadScript({
  //   id: 'google-map-script',
  //   googleMapsApiKey: "AIzaSyDdE2m_2nAtfQN9CA3emww375xD5CELjiU",
  //   //     libraries: ["places"],
  //   });

  const [originCoordinates, setOriginCoordinates] = useState([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState([]);
  const [distance, setDistance] = useState(0);

  const queryParams = new URLSearchParams(window.location.search)
  const zipCode = queryParams.get('zipCode');

  const getOriginCoordinates = async (value) => {
    value.toString().includes("-") ? value.replace(/\D/g, '') : value;
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${value}&key=AIzaSyDdE2m_2nAtfQN9CA3emww375xD5CELjiU`)
      .then((res) => res.json())
      .then((data) => {
          const lat = data.results[0].geometry.location.lat.toString();
          const lng = data.results[0].geometry.location.lng.toString();
          setOriginCoordinates([lat, lng]);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getOriginCoordinates(zipCode);
  }, [])

  let companyLat = [];
  let companyLng = [];
  Companies.map(company => {
    companyLat.push(company.address.lat);
    companyLng.push(company.address.lng);
  })

  const getDistanceByCoordinates = async (latOrigin, lngOrigin, latDestination, lngDestination) => {
    await fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${latOrigin}%2C${lngOrigin}&destinations=${latDestination}%2C${lngDestination}&key=AIzaSyDdE2m_2nAtfQN9CA3emww375xD5CELjiU`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  getDistanceByCoordinates(originCoordinates[0], originCoordinates[1], companyLat[0], companyLng[0]);

  return (
    <main>
      <section className={style.results}>
        <div className="section--light-grey-color">
          <h2 className={style.results__title}>Resultados da busca</h2>
        </div>
        <div className="container">
          <div className={style.results__wrapper}>
            <ResultsSidebar />
            {originCoordinates}
            <ResultsFeed />
          </div>
        </div>
      </section>
      <CallToAction />
    </main>
  );
};

export default Results;

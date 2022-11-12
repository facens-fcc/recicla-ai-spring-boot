import React from 'react';
import style from './Results.module.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

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

  return (
    <div>
      <Header />
      <main>
        <section className={style.results}>
          <div className="section--light-grey-color">
            <h2 className={style.results__title}>Resultados da busca</h2>
          </div>
          <div className="container">
            <div className={style.results__wrapper}>
              <ResultsSidebar />
              aa
              {/* {!isLoaded ? <div>Loading...</div> : (
                <Map />
              )} */}
              <ResultsFeed />
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Results;

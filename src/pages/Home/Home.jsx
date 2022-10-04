import React from 'react';
import Header from '../../components/Header/Header';
import Grid from '../../components/Grid/Grid';
import Col from '../../components/Col/Col';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Grid>
        <Col>
          <h1>Home</h1>
        </Col>
        <Col>
          <h2>Home</h2>
        </Col>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;

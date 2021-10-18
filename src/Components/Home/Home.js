import React from 'react';
import CallToAction from '../Appointment/CallToAction';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;

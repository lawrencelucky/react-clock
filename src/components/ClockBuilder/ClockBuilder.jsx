import React from 'react';
import Header from '../Header/Header';
import Footer from './../Footer/Footer';
import Clock from '../Clock/Clock';

const ClockBuilder = () => {
  return (
    <div>
      <Header />
      <Clock />
      <Footer />
    </div>
  );
};

export default ClockBuilder;

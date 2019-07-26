import React from 'react';
import logo from './logo.svg';
import './HomePage.scss';
import Header from './components/Shared/Header/Header';
import HeroBanner from './components/HomePage/HeroBanner/HeroBanner';
import QuickCatetories from './components/HomePage/QuickCatetories/QuickCatetories';
import NewArrival from './components/HomePage/NewArrival/NewArrival';
import DealOfTheWeek from './components/HomePage/DealOfTheWeek/DealOfTheWeek';
import ShippingInformation from './components/HomePage/ShippingInformation/ShippingInformation';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div>
        <Header />
        <HeroBanner />
        <QuickCatetories />
        <NewArrival />
        <DealOfTheWeek />
        <ShippingInformation />
        <Footer />
    </div>
  );
}

export default App;

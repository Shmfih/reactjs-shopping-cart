import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import HeroBanner from '../HomePage/HeroBanner/HeroBanner';
import QuickCatetories from '../HomePage/QuickCatetories/QuickCatetories';
import NewArrival from '../HomePage/NewArrival/NewArrival';
import DealOfTheWeek from '../HomePage/DealOfTheWeek/DealOfTheWeek';
import ShippingInformation from '../HomePage/ShippingInformation/ShippingInformation';
import Footer from '../Shared/Footer/Footer';
import '../../styles/main_styles.css';
import '../../styles/responsive.css'

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <HeroBanner />
                <QuickCatetories />
                <NewArrival />
                <DealOfTheWeek />
                <ShippingInformation />
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;
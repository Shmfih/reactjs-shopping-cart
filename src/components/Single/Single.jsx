import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import '../../styles/single_styles.css';
import '../../styles/single_responsive.css';
import ProductDetail from './ProductDetail/ProductDetail';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';

class Single extends Component {
    render() {
        return (
            <div>
               <div className="super_container">
                    {/* Header */}
                    <Header /> 
                    <div className="container single_product_container">
                        <div className="row">
                        <div className="col">
                            {/* Breadcrumbs */}
                            <Breadcrumbs />
                        </div>
                        </div>
                        {/* Product information */}
                        <div className="row">
                        <ProductDetail />
                        </div>
                    </div>
                    {/* Tabs */}
                    {/* Benefit */}
                    <div className="benefit">
                        <div className="container">
                        <div className="row benefit_row">
                            <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true" /></div>
                                <div className="benefit_content">
                                <h6>free shipping</h6>
                                <p>Suffered Alteration in Some Form</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true" /></div>
                                <div className="benefit_content">
                                <h6>cach on delivery</h6>
                                <p>The Internet Tend To Repeat</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true" /></div>
                                <div className="benefit_content">
                                <h6>45 days return</h6>
                                <p>Making it Look Like Readable</p>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                            <div className="benefit_item d-flex flex-row align-items-center">
                                <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true" /></div>
                                <div className="benefit_content">
                                <h6>opening all week</h6>
                                <p>8AM - 09PM</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <footer className="footer">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                            <div className="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                                <ul className="footer_nav">
                                <li><a href="https://nordiccoder.com/blog" target="blank">blog</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                </ul>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                                <ul>
                                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-skype" aria-hidden="true" /></a></li>
                                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="footer_nav_container">
                                <div className="cr">©2018 All Rights Reserverd. This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="#">Colorlib</a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </footer>
                    </div>

            </div>
        );
    }
}

Single.propTypes = {

};

export default Single;
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
        console.log(this.props.match.params.id);
        return (
            <div>
               <div className="super_container">
                    {/* Header */}
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
                </div>

            </div>
        );
    }
}

Single.propTypes = {

};

export default Single;
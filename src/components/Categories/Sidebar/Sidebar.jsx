import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PriceRangeFiltering from './PriceRangeFiltering/PriceRangeFiltering';

class Sidebar extends PureComponent {
    render() {
        return (
            <div>
                <div className="sidebar">
                    <div className="sidebar_section">
                        <div className="sidebar_title">
                        <h5>Product Category</h5>
                        </div>
                        <ul className="sidebar_categories">
                        <li><a href="#">Men</a></li>
                        <li className="active"><a href="#"><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>Women</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">New Arrivals</a></li>
                        <li><a href="#">Collection</a></li>
                        <li><a href="categories.html">shop</a></li>
                        </ul>
                    </div>
                    <PriceRangeFiltering />
                </div>
            </div>
        );
    }
}

Sidebar.propTypes = {

};

export default Sidebar;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PriceRangeFiltering from './PriceRangeFiltering/PriceRangeFiltering';
import {NavLink} from 'react-router-dom';

class Sidebar extends PureComponent {

    toTitleCase(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    render() {
        const {categoriesList, currentFilter, onChangeCategories} = this.props;
        // Covert quick categories into array
        const categoriesArray = Object.entries(categoriesList);
        console.log(currentFilter.currentCategories);
        const selectedIndicator = (<span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>);
        return (
            <div>
                <div className="sidebar">
                    <div className="sidebar_section">
                        <div className="sidebar_title">
                        <h5>Product Category</h5>
                        </div>
                        <ul className="sidebar_categories">
                        <li className={currentFilter.currentCategories===""?"active":""} key="all" onClick={() => onChangeCategories("")} ><NavLink to={`/shop`}> All </NavLink></li>
                            {categoriesArray.map(categories => (
                                <li className={categories[0]===currentFilter.currentCategories?"active":""} key={categories[0]} onClick={() => onChangeCategories(categories[0])} ><NavLink to={`/shop?categories=${categories[0]}`}> {this.toTitleCase(categories[0])} </NavLink></li>
                            ))}

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
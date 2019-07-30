import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
import MainProductsContent from './MainProductsContent/MainProductsContent';
import Sidebar from './Sidebar/Sidebar';
import Benefit from './Benefit/Benefit';
import '../../styles/categories_styles.css';
import '../../styles/categories_responsive.css';

class Categories extends PureComponent {
    render() {
        return (
            <div>
               <Header />
               <div class="container product_section_container">
		        <div class="row">
			    <div class="col product_section clearfix">
               <Breadcrumbs />
               <Sidebar />
               <MainProductsContent />
               </div></div></div>
               <Benefit />
               <Footer /> 
            </div>
        );
    }
}

Categories.propTypes = {

};

export default Categories;
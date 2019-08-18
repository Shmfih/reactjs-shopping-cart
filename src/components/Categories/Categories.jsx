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
import BottomPageProductSorting from './MainProductsContent/BottomPageProductSorting/BottomPageProductSorting';
import productApi from '../../api/productApi';
import categoriesApi from '../../api/categoriesApi';
import queryString from '../../api/queryString';
import { thisExpression } from '@babel/types';

class Categories extends PureComponent {
    constructor(props){
        super(props);
        // Init state from url search params
        const urlParams = new URLSearchParams(this.props.location.search);
        const initPage = urlParams.get("page");
        const initSort = urlParams.get("sort");
        const initCategories = urlParams.get("categories");
        this.state = {
            currentFilter: {
                currentCategories: initCategories?initCategories:"",
                sortBy: initSort?initSort:"",
                productPerPage: 6,
                currentPage: initPage?initPage:1,
                totalProduct: 0,
            },
            productList: [],
            quickCategories: {},
            sliderValue: [200,500],
            productLoading: true,

        }
    }

    handleChangeCategories = (newCategories) => {
        const newFilterState= {
            currentFilter:{
                ...this.state.currentFilter,
                currentCategories: newCategories,
            }};
        this.setState(newFilterState);
        this.getProductList(newFilterState.currentFilter);
        console.log(newFilterState);
        if(!newCategories){
            this.props.history.push(`/shop`);
        } else {
            this.props.history.push(`/shop?categories=${newCategories}`)
        }
    }

    getQuickCategoriesList = async () => {
        try {
        const categoriesList = {};
        const response = await categoriesApi.getAll();
        response.body.forEach(categories=> {
            const quickCategories = { [categories.name] : categories.id};
            Object.assign(categoriesList,quickCategories)
            })
        }
        catch(error) {
            console.log(error);
        }
    }

    getProductList = async (productFilter) => {
        const { currentCategories, sortBy, productPerPage, currentPage } = productFilter;
        try {
            
            // Prepair params
            let filter = {
              limit: productPerPage,
              skip: productPerPage*(currentPage - 1),
              order: `${sortBy===""?"":sortBy + ' '}desc`,
            };
            if(!!(currentCategories)){
              filter = {
                ...filter,
                where: {
                categoryId: this.state.quickCategories[currentCategories],}
              ,}};
            const params = {
              filter: JSON.stringify(filter),
            }

            // Get product list
            const response = await productApi.getAll(params);
            const { body: productList } = response;
            
            // Set new state
            this.setState({ productList, productLoading: false});
      
          } catch (error) {
            console.log('Failed to load post list: ', error.message);
          }
    }

    componentDidMount = async () => {
        
        try{
            // Get categories list
            const categoriesRequest = await categoriesApi.getAll();
            const categoriesList = categoriesRequest.body;

            // Get quick categories list
            const quickCategories = {};
            categoriesList.forEach(categories=> {
                const quickCat = { [categories.name] : categories.id};
                Object.assign(quickCategories,quickCat);
                })
            //Get page pagination
            const response = await productApi.getAll();
            const totalProduct = response.pagination.total;
            
            // Set state
            this.setState({ quickCategories, currentFilter: { ...this.state.currentFilter, totalProduct }})
            // Get product list
            this.getProductList(this.state.currentFilter);
        }
        catch{

        }
        //this.getCategoriesList();
        
    }

    handleChangeFilter = (newFilter) => {
        this.setState({...this.state, currentFilter: newFilter});
        const { sortBy, currentPage, currentCategories } = this.state;
        // this.props.history.push(`/product?${sortBy?`sort=${sortBy}&`:""}page=${currentPage}&categories=${currentCategories}`);
        this.getProductList(newFilter);
    }

    render() {
        console.log(this.state);
        const { currentFilter, productLoading, productList, quickCategories, sliderValue } = this.state;
        if(productLoading) return "";
        return (
            <div>
               <div className="container product_section_container">
		        <div className="row">
			    <div className="col product_section clearfix">
               <Breadcrumbs />
               <Sidebar
                    categoriesList={quickCategories} onChangeCategories={this.handleChangeCategories}
                    sliderValue = {sliderValue} onSliderChangeValue = {this.handleSliderChangeValue}
                    currentFilter={currentFilter} />
               <MainProductsContent productList={productList}
                currentFilter = {currentFilter}
                onChangeFilter={this.handleChangeFilter} />
               </div>
               
               </div>
               
               </div>

            </div>
        );
    }
}

Categories.propTypes = {

};

export default Categories;
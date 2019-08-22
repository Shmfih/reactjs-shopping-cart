import React, { PureComponent } from 'react';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
import MainProductsContent from './MainProductsContent/MainProductsContent';
import Sidebar from './Sidebar/Sidebar';
import '../../styles/categories_styles.css';
import '../../styles/categories_responsive.css';
import productApi from '../../api/productApi';
import categoriesApi from '../../api/categoriesApi';


class Categories extends PureComponent {
    constructor(props){
        super(props);
        // Init state from url search params
        const urlParams = new URLSearchParams(this.props.location.search);
        const initPage = urlParams.get("page");
        const initShow = urlParams.get("show");
        const initSort = urlParams.get("sort");
        const initFromPrice = urlParams.get("fromPrice");
        const initToPrice = urlParams.get("toPrice");
        const initCategories = urlParams.get("categories");
        this.state = {
            currentFilter: {
                currentCategories: initCategories?initCategories:"",
                sortBy: initSort?initSort:"",
                productPerPage: initShow?initShow:6,
                currentPage: initPage?initPage:1,
                totalProduct: 0,
                priceRange: {min: initFromPrice?Number(initFromPrice):300, max: initToPrice?Number(initToPrice):750},
            },
            productList: [],
            quickCategories: {},
            productLoading: true,

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
        const { currentCategories, sortBy, productPerPage, currentPage, priceRange } = productFilter;
        console.log(productFilter);
        try {
            
            // Prepair params
            let filter = {
              limit: productPerPage,
              skip: productPerPage*(currentPage - 1),
              order: `${sortBy===""?"":sortBy + ' '}desc`,
              where: {
                  salePrice: {
                    between: [priceRange.min, priceRange.max],
                  },
              }
            };
            if(!!(currentCategories)){
              filter = {
                ...filter,
                where: {
                    ...filter.where,
                    categoryId: this.state.quickCategories[currentCategories],}
              ,}};
            console.log(filter);
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


    makeParamsURL = (filter) => {
        return `/shop?categories=${filter.currentCategories}&show=${filter.productPerPage}&page=${filter.currentPage}&sort=${filter.sortBy}&fromPrice=${filter.priceRange.min}&toPrice=${filter.priceRange.max}` 
    }

    // Change filter functions

    handleChangeCategories = (newCategories) => {
        const { currentFilter } = this.state;
        const newState = {
            ...this.state,
            currentFilter: {
                ...currentFilter,
                currentCategories: newCategories,
            }
        }
        console.log("newState",newState);
        this.setState(newState);
        this.getProductList(newState.currentFilter);
        this.props.history.replace(this.makeParamsURL(newState.currentFilter));
    }


    handleChangeCurrentPage = (pageNum) => {
        const { currentFilter } = this.state;
        const newState = {
            ...this.state,
            currentFilter: {
                ...currentFilter,
                currentPage: pageNum,
            }
        }
        this.setState(newState);
        this.getProductList(newState.currentFilter);
        this.props.history.replace(this.makeParamsURL(newState.currentFilter));
    }
    
    handleSliderChangeValue = (newValue) => {
        const { currentFilter } = this.state;
        const newState = {
            ...this.state,
            currentFilter: {
                ...currentFilter,
                priceRange: newValue,
            }
        }
        this.setState(newState);
        this.getProductList(newState.currentFilter);
        this.props.history.replace(this.makeParamsURL(newState.currentFilter));
    }

    handleChangeSortType = (newSortType) => {
        const { currentFilter } = this.state;
        const newState = {
            ...this.state,
            currentFilter: {
                ...currentFilter,
                sortBy: newSortType,
                currentPage: 1,
            }
        }
        this.setState(newState);
        this.getProductList(newState.currentFilter);
        this.props.history.replace(this.makeParamsURL(newState.currentFilter));
    }

    handleChangeProductPerPage = (newPPP) => {
        const { currentFilter } = this.state;
        const newState = {
            ...this.state,
            currentFilter: {
                ...currentFilter,
                productPerPage: newPPP,
                currentPage: 1,
            }
        }
        this.getProductList(newState.currentFilter);
        this.getProductList(newState);
        this.props.history.replace(this.makeParamsURL(newState.currentFilter));
    }
    render() {
        const { currentFilter, productLoading, productList, quickCategories } = this.state;
        console.log(this.state);
        if(productLoading) return "";
        return (
            <div className="container product_section_container">
		        <div className="row">
			        <div className="col product_section clearfix">
                <Breadcrumbs />
                <Sidebar
                        categoriesList={quickCategories} onChangeCategories={this.handleChangeCategories}
                        onSliderChangeValue = {this.handleSliderChangeValue}
                        currentFilter={currentFilter} />
                <MainProductsContent productList={productList}
                        currentFilter = {currentFilter}
                        onChangeCurrentPage = {this.handleChangeCurrentPage}
                        onChangeProductPerPage = {this.handleChangeProductPerPage}
                        onChangeSortType = {this.handleChangeSortType} />
                    </div>
                </div>
            </div>
        );
    }
}

Categories.propTypes = {

};

export default Categories;
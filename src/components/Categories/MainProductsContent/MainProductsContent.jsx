import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import TopPageProductSorting from './TopPageProductSorting/TopPageProductSorting';
import BottomPageProductSorting from './BottomPageProductSorting/BottomPageProductSorting';
import productApi from '../../../api/productApi';


class MainProductsContent extends PureComponent {


    componentDidMount = () => {

    }

    render() {
        const {productList, onChangeFilter, currentFilter }=this.props;
        const sortType = {
            default: "Default Sorting",
            price: "Price",
            name: "Product name",
        }
        return (
                <div className="main_content">
                {/* Products */}
                <div className="products_iso">
                    <div className="row">
                    <div className="col">

                        {/* TopPageProductSorting */}
                        <div className="product_sorting_container product_sorting_container_top">
                        <ul className="product_sorting">
                            <li>
                            <span className="type_sorting_text">{sortType[currentFilter.sortBy?currentFilter.sortBy:"default"]}</span>
                            <i className="fa fa-angle-down" />
                            <ul className="sorting_type" >
                                <li className="type_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, sortBy: ""})}><span>Default Sorting</span></li>
                                <li className="type_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, sortBy: "price"})}><span>Price</span></li>
                                <li className="type_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, sortBy: "name"})}><span>Product Name</span></li>
                            </ul>
                            </li>
                            <li>
                            <span>Show</span>
                            <span className="num_sorting_text">{currentFilter.productPerPage}</span>
                            <i className="fa fa-angle-down" />
                            <ul className="sorting_num">
                                <li className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, productPerPage: 6})}><span>6</span></li>
                                <li className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, productPerPage: 12})}><span>12</span></li>
                                <li className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, productPerPage: 24})}><span>24</span></li>
                            </ul>
                            </li>
                        </ul>
                        <div className="pages d-flex flex-row align-items-center">
                            <div className="page_current">
                            <span>1</span>
                            <ul className="page_selection">
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                            </ul>
                            </div>
                            <div className="page_total"><span>of</span> 3</div>
                            <div id="next_page" className="page_next"><a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true" /></a></div>
                        </div>
                        </div>

                        <div className="product-grid" style={{height: Math.ceil(productList.lenght/4)*360 + "px" }}>
                        {productList.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                        </div>

                        <BottomPageProductSorting />
                    </div>
                    </div>
                </div>
                </div>

        );
    }
}

MainProductsContent.propTypes = {

};

export default MainProductsContent;
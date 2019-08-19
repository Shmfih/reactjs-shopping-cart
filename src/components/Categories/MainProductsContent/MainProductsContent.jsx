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
        };
        const totalPage = Math.ceil(currentFilter.totalProduct/currentFilter.productPerPage);
        let pageList = [];
        for(let nPage=0; nPage <= (totalPage-1); nPage++){
            pageList.push(nPage+1);
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
                                <li className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, productPerPage: 6, currentPage: 1})}><span>6</span></li>
                                <li className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, productPerPage: 12, currentPage: 1})}><span>12</span></li>
                                <li className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, productPerPage: 24, currentPage: 1})}><span>24</span></li>
                            </ul>
                            </li>
                        </ul>
                        <div className="pages d-flex flex-row align-items-center">
                            <div className="page_current">
                            <span>{currentFilter.currentPage}</span>
                            <ul className="page_selection">
                                {
                                    pageList.map(page => (
                                        <li key={page} onClick={()=> onChangeFilter({...currentFilter, currentPage: page})}>{page}</li>
                                    ))
                                }
                            </ul>
                            </div>
                            <div className="page_total"><span>of</span> {totalPage}</div>
                            <div id="next_page" className="page_next" onClick={()=> onChangeFilter({...currentFilter, currentPage: currentFilter.currentPage + 1})}><i className="fa fa-long-arrow-right" aria-hidden="true" /></div>
                        </div>
                        </div>

                        <div className="product-grid" style={{height: Math.ceil(productList.lenght/4)*360 + "px" }}>
                        {productList.map(product => (
                            <ProductItem key={product.id} product={product} />
                        ))}
                        </div>

                        {/* BottomPageProductSorting */}
                        <div className="product_sorting_container product_sorting_container_bottom clearfix">
                            <ul className="product_sorting">
                                <li>
                                <span>Show:</span>
                                <span className="num_sorting_text">{currentFilter.currentPage}</span>
                                <i className="fa fa-angle-down" />
                                <ul className="sorting_num">
                                    {
                                        pageList.map(page => (
                                            <li key={page} className="num_sorting_btn" onClick={()=> onChangeFilter({...currentFilter, currentPage: page})}><span>{page}</span></li>
                                        ))
                                    }
                                </ul>
                                </li>
                            </ul>
                            <span className="showing_results">
                                Showing {currentFilter.currentPage}–{totalPage} of {currentFilter.productPerPage} results
                            </span>
                            <div className="pages d-flex flex-row align-items-center">
                                <div className="page_current">
                                <span>{currentFilter.currentPage}</span>
                                <ul className="page_selection">
                                {
                                    pageList.map(page => (
                                        <li key={page} onClick={()=> onChangeFilter({...currentFilter, currentPage: page})}>{page}</li>
                                    ))
                                }
                                </ul>
                                </div>
                                <div className="page_total"><span>of</span> {totalPage}</div>
                                <div id="next_page_1" className="page_next" onClick={()=> onChangeFilter({...currentFilter, currentPage: currentFilter.currentPage + 1})}><i className="fa fa-long-arrow-right" aria-hidden="true" /></div>
                            </div>
                        </div>
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
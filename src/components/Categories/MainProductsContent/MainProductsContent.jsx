import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import TopPageProductSorting from './TopPageProductSorting/TopPageProductSorting';
import BottomPageProductSorting from './BottomPageProductSorting/BottomPageProductSorting';
import ProductList from '../ProductList/ProductList';
import productApi from '../../../api/productApi';


class MainProductsContent extends PureComponent {


    componentDidMount = () => {

    }

    render() {
        const {productList}=this.props;
        return (
                <div className="main_content">
                {/* Products */}
                <div className="products_iso">
                    <div className="row">
                    <div className="col">

                        <TopPageProductSorting />

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
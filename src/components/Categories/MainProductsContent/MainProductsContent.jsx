import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import TopPageProductSorting from './TopPageProductSorting/TopPageProductSorting';
import BottomPageProductSorting from './BottomPageProductSorting/BottomPageProductSorting';


class MainProductsContent extends PureComponent {
    render() {
        return (
            <div>
                <div className="main_content">
                {/* Products */}
                <div className="products_iso">
                    <div className="row">
                    <div className="col">
                        {/* Product Sorting */}
                        <TopPageProductSorting />
                        {/* Product Grid */}
                        <div className="product-grid">
                            {/* Product */}
                            <ProductItem />
                        </div>
                        {/* Product Sorting */}
                        <BottomPageProductSorting />
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
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends PureComponent {

    renderProductList(productList){
        return productList.forEach(product => (<ProductItem key={product.id} product={product} />));
            
    }

    render() {
        const { productList } = this.props;
        console.log(productList[1]);
        // console.log( this.props.productList);
        return (
            <div>
                <div className="product-grid">
                {productList.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))}
                    
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {

};

export default ProductList;
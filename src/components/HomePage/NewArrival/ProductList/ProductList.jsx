import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import { connect } from 'react-redux';
import { addProductToCart } from '../../../../action/index';

class ProductList extends PureComponent {

    renderProductList(productList){
        return productList.forEach(product => (<ProductItem key={product.id} product={product} />));
            
    }

    render() {
        const { productList, addProductToCart } = this.props;
        return (
            <div>
                <div className="product-grid">
                {productList.map(product => (
                    <ProductItem key={product.id} product={product} addProductToCart={addProductToCart} />
                ))}
                    
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {

};

const mapDispatchToProps = dispatch => ({
    addProductToCart: (product) => dispatch(addProductToCart(product, 1))
  });

export default connect(null, mapDispatchToProps)(ProductList);
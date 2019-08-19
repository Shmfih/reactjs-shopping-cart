import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../ProductItem/ProductItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addProductToCart } from '../../../../action/index';
import ActionType from '../../../../action/actionType'

class ProductList extends PureComponent {

    renderProductList(productList){
        return productList.forEach(product => (<ProductItem key={product.id} product={product} />));
            
    }

    render() {
        const { productList, addProductToCart } = this.props;
        console.log( this.props);
        return (
            <div>
                <div className="product-grid">
                {productList.map(product => (
                    <ProductItem key={product.id} product={product} onAddToCartButtonClick={addProductToCart} />
                ))}
                    
                </div>
            </div>
        );
    }
}

ProductList.propTypes = {

};

const mapDispatchToProps = dispatch => ({
    addProductToCart: (product, quantity) => dispatch(addProductToCart(product, quantity))
  });

export default connect(null, mapDispatchToProps)(ProductList);
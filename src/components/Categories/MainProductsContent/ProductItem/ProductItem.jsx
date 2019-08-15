import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

class ProductItem extends PureComponent {

    render() {
        const { product } = this.props;
        const isDiscount = !(product.originalPrice === product.salePrice)
        return (
            <div className="product-item">
                <div className={`product product_filter ${isDiscount?"discount":""}`}>
                <div className="product_image">
                    <img src={product.thumbnail} alt="abc" />
                </div>
                <div className="favorite favorite_left" />
                {isDiscount && <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>{`-$${product.originalPrice - product.salePrice}`}</span></div>}
                <div className="product_info">
                    <h6 className="product_name"><NavLink to={ `/product/${product.id}`}>{product.name}</NavLink></h6>
                    <div className="product_price">{`$${product.salePrice}`}{isDiscount && <span>{`$${product.originalPrice}`}</span>}</div>
                </div>
                </div>
                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
            </div>

        );
    }
}

ProductItem.propTypes = {

};

export default ProductItem;
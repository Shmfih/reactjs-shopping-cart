import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductItem extends PureComponent {

    render() {
        return (
            <div>
                <div className="product-item men">
                    <div className="product discount product_filter">
                    <div className="product_image">
                        <img src={this.props.thumbnail} alt="abc" />
                    </div>
                    <div className="favorite favorite_left" />
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-$20</span></div>
                    <div className="product_info">
                        <h6 className="product_name"><a href="single.html">{this.props.productName}</a></h6>
                        <div className="product_price">{this.props.salePrice}<span>{this.props.originalPrice}</span></div>
                    </div>
                    </div>
                    <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {

};

export default ProductItem;
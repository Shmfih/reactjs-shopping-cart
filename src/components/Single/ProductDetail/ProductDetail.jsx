import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../ProductDetail/ProductDetail.scss';
import { connect } from 'react-redux';
import { addProductToCart } from '../../../action/index';
class ProductDetail extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			productQuantity: 1,
			currentImage: this.props.product.image
		};
	}

	handleIncreaseProductClick = () => {
		this.setState({ productQuantity: this.state.productQuantity + 1 });
	};

	handleDecreaseProductClick = () => {
		if (this.state.productQuantity === 1) return;
		this.setState({ productQuantity: this.state.productQuantity - 1 });
	};

	handleChangeImage = image => {
		this.setState({ currentImage: image });
	};

	render() {
		const { product, addProductToCart } = this.props;
		const { productQuantity, currentImage } = this.state;
		return (
			<>
				<div className="col-lg-7">
					<div className="single_product_pics">
						<div className="row">
							<div className="col-lg-3 thumbnails_col order-lg-1 order-2">
								<div className="single_product_thumbnails">
									<ul>
										<li
											className={product.image === currentImage ? 'active' : ''}
											onClick={() => this.handleChangeImage(product.image)}
										>
											<img src={`${product.thumbnail}`} alt="" />
										</li>
										{product.thumbnails.map((thumbnail, idx) => (
											<li
												key={idx}
												className={product.images[idx] === currentImage ? 'active' : ''}
												onClick={() => this.handleChangeImage(product.images[idx])}
											>
												<img src={thumbnail} alt={thumbnail} />
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="col-lg-9 image_col order-lg-2 order-1">
								<div className="single_product_image">
									<div
										className="single_product_image_background"
										style={{ backgroundImage: `url(${currentImage})` }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="product_details">
						<div className="product_details_title">
							<h2>{product.name}</h2>
							<p>{product.shortDescription}</p>
						</div>
						<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
							<span className="ti-truck" />
							<span>free delivery</span>
						</div>
						{product.originalPrice !== product.salePrice && (
							<div className="original_price">{product.originalPrice}</div>
						)}
						<div className="product_price">${product.salePrice}</div>
						<ul className="star_rating">
							<li>
								<i className="fa fa-star" aria-hidden="true" />
							</li>
							<li>
								<i className="fa fa-star" aria-hidden="true" />
							</li>
							<li>
								<i className="fa fa-star" aria-hidden="true" />
							</li>
							<li>
								<i className="fa fa-star" aria-hidden="true" />
							</li>
							<li>
								<i className="fa fa-star-o" aria-hidden="true" />
							</li>
						</ul>
						<div className="product_color">
							<span>Select Color:</span>
							<ul>
								<li style={{ background: '#e54e5d' }} />
								<li style={{ background: '#252525' }} />
								<li style={{ background: '#60b3f3' }} />
							</ul>
						</div>
						<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
							<span>Quantity:</span>
							<div className="quantity_selector">
								<span className="minus" onClick={() => this.handleDecreaseProductClick()}>
									<i className="fa fa-minus" aria-hidden="true" />
								</span>
								<span id="quantity_value">{productQuantity}</span>
								<span className="plus" onClick={() => this.handleIncreaseProductClick()}>
									<i className="fa fa-plus" aria-hidden="true" />
								</span>
							</div>
							<div
								class="single_red_button single_add_to_cart_button"
								onClick={() => addProductToCart(product, productQuantity)}
							>
								<span>ADD TO CART </span>
							</div>
							<div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
						</div>
					</div>
				</div>
			</>
		);
	}
}

ProductDetail.propTypes = {};

const mapDispatchToProps = dispatch => ({
	addProductToCart: (product, quantity) => dispatch(addProductToCart(product, quantity))
});

export default connect(
	null,
	mapDispatchToProps
)(ProductDetail);

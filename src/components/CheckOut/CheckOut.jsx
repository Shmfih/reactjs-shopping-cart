import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProductToCart, removeProductFromCart, deleteProductFromCart } from '../../action/index';
import './CheckOut.scss';
import {NavLink} from 'react-router-dom';
import svg from './empty-cart.svg';

class CheckOut extends PureComponent {
	render() {
		const { productList, addProductToCart, removeProductFromCart, deleteProductFromCart } = this.props;
		console.log(productList);
		if (productList.length===0)
			return (
				<div className="container" style={{marginTop: "180px"}}>
					<img className="empty-cart "src={svg} />
					<p className="empty-cart-text">
						There are no products in your shopping cart.
						Let's go back to <NavLink to="/shop">shop</NavLink> to buy something.
					</p>
				</div>
			);
		return (
			<div className="container">
				<table className="table table-hover" style={{ marginTop: '180px' }}>
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Product</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col"></th>
							<th scope="col">Total</th>
						</tr>
					</thead>
					<tbody>
						{productList.map((item, index) => (
							<tr key={index}>
								<th scope="row">
									<img src={item.product.thumbnail} alt="" width="100" height="100" />
								</th>
								<td>{item.product.name}</td>
								<td>${item.product.salePrice}</td>
								<td>
									<button
										type="button"
										className="btn btn-default btn-sm decrease-button"
										onClick={() => removeProductFromCart(item.product)}
									>
										-
									</button>
									<input className="product-quantity-input" type="text" value={item.quantity} />
									<button
										type="button"
										className="btn btn-default btn-sm increase-button"
										onClick={() => addProductToCart(item.product)}
									>
										+
									</button>
								</td>
								<td>
									<button
										type="button"
										className="btn btn-default btn-sm"
										onClick={() => deleteProductFromCart(item.product, item.quantity)}
									>
										x
									</button>
								</td>
								<td>${item.product.salePrice * item.quantity}</td>
							</tr>
						))}
						<tr>
							<th></th>
							<th></th>
							<td>
								<b>Total:</b>
							</td>
							<td>
								{productList.length > 0
									? productList.reduce((prev, curr) => prev + curr.quantity, 0)
									: 0}{' '}
								product(s)
							</td>
							<td></td>
							<td>
								$
								{productList.length > 0
									? productList.reduce(
											(prev, curr) => prev + curr.product.salePrice * curr.quantity,
											0
									  )
									: 0}
							</td>
						</tr>
						<tr>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th></th>
							<th>
								<button type="button" className="btn btn-success">
									Purchase
								</button>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

CheckOut.propTypes = {};

const mapStateToProps = state => ({
	productList: state.cart.productList
});

const mapDispatchToProps = dispatch => ({
	addProductToCart: product => dispatch(addProductToCart(product, 1)),
	removeProductFromCart: product => dispatch(removeProductFromCart(product, 1)),
	deleteProductFromCart: (product, quantity) => dispatch(deleteProductFromCart(product, quantity))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CheckOut);

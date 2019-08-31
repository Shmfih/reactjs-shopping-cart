import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import { addProductToCart } from '../../action/index';
import TopPageFilter from './TopPageFilter';
import BottomPageFilter from './BottomPageFilter';
class MainProductsContent extends PureComponent {
	componentDidMount = () => {};

	render() {
		const {
			productList,
			currentFilter,
			onChangeCurrentPage,
			onChangeProductPerPage,
			onChangeSortType,
			addProductToCart
		} = this.props;

		// console.log(currentFilter);
		return (
			<div className="main_content">
				{/* Products */}
				<div className="products_iso">
					<div className="row">
						<div className="col">
							{/* TopPageProductSorting */}
							<TopPageFilter
								currentFilter={currentFilter}
								onChangeProductPerPage={onChangeProductPerPage}
								onChangeSortType={onChangeSortType}
								onChangeCurrentPage={onChangeCurrentPage}
							/>
							{/* Product List */}
							<div
								className="product-grid"
								style={{ height: Math.ceil(productList.lenght / 4) * 360 + 'px' }}
							>
								{productList &&
									productList.map(product => (
										<ProductItem
											key={product.id}
											product={product}
											addProductToCart={addProductToCart}
										/>
									))}
							</div>

							{/* BottomPageProductSorting */}
							<BottomPageFilter
								currentFilter={currentFilter}
								onChangeProductPerPage={onChangeProductPerPage}
								onChangeSortType={onChangeSortType}
								onChangeCurrentPage={onChangeCurrentPage}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

MainProductsContent.propTypes = {};

const mapDispatchToProps = dispatch => ({
	addProductToCart: product => dispatch(addProductToCart(product, 1))
});

export default connect(
	null,
	mapDispatchToProps
)(MainProductsContent);

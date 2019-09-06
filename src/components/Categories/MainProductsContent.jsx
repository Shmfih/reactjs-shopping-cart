import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import { addProductToCart } from '../../action/index';
import TopPageFilter from './TopPageFilter';
import BottomPageFilter from './BottomPageFilter';
import './MainProduct.scss';

class MainProductsContent extends PureComponent {
	onChangeCurrentPage = pageNum => {
		const { currentFilter, onChangeCurrentFilter } = this.props;
		const newFilter = {
			...currentFilter,
			currentPage: pageNum
		};
		onChangeCurrentFilter(newFilter);
	};

	onChangeSortType = newSortType => {
		const { currentFilter, onChangeCurrentFilter } = this.props;
		const newFilter = {
			...currentFilter,
			sortBy: newSortType,
			currentPage: 1
		};
		onChangeCurrentFilter(newFilter);
	};

	onChangeProductPerPage = newPPP => {
		const { currentFilter, onChangeCurrentFilter } = this.props;
		const newFilter = {
			...currentFilter,
			productPerPage: newPPP,
			currentPage: 1
		};
		onChangeCurrentFilter(newFilter);
	};

	render() {
		const { productList, currentFilter, addProductToCart, productLoading } = this.props;
		console.log(productLoading);
		return (
			<div className="main_content">
				<div className="products_iso">
					<div className="row">
						<div className="col">
							<div class="lds-spinner" />
							<TopPageFilter
								currentFilter={currentFilter}
								onChangeProductPerPage={this.onChangeProductPerPage}
								onChangeSortType={this.onChangeSortType}
								onChangeCurrentPage={this.onChangeCurrentPage}
							/>
							{/* Product List */}
							<div
								className="product-grid"
								style={{ height: Math.ceil(productList.lenght / 4) * 360 + 'px' }}
							>
								{productLoading && (
									<div class="product-loading">
										<img src="/images/loading.gif" />
										<span>Loading...</span>
									</div>
								)}
								{productList &&
									productList.map(product => (
										<ProductItem
											key={product.id}
											product={product}
											addProductToCart={addProductToCart}
										/>
									))}
							</div>

							<BottomPageFilter
								currentFilter={currentFilter}
								onChangeProductPerPage={this.onChangeProductPerPage}
								onChangeSortType={this.onChangeSortType}
								onChangeCurrentPage={this.onChangeCurrentPage}
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

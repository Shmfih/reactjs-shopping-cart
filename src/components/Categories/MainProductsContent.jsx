import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';np
import ProductItem from './ProductItem/ProductItem';
import { connect } from 'react-redux';
import { addProductToCart } from '../../action/index';
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
		const sortType = {
			default: 'Default Sorting',
			salePrice: 'Price',
			name: 'Product name'
		};
		const totalPage = Math.ceil(currentFilter.totalProduct / currentFilter.productPerPage);
		const currPage = currentFilter.currentPage;
		let pageList = [];
		for (let nPage = 0; nPage <= totalPage - 1; nPage++) {
			pageList.push(nPage + 1);
		}
		console.log(currentFilter);
		return (
			<div className="main_content">
				{/* Products */}
				<div className="products_iso">
					<div className="row">
						<div className="col">
							{/* TopPageProductSorting */}
							<div className="product_sorting_container product_sorting_container_top">
								<ul className="product_sorting">
									<li>
										<span className="type_sorting_text">
											{sortType[currentFilter.sortBy ? currentFilter.sortBy : 'default']}
										</span>
										<i className="fa fa-angle-down" />
										<ul className="sorting_type">
											{Object.keys(sortType).map(sortKey => (
												<li
													key={sortKey}
													className="type_sorting_btn"
													onClick={() => onChangeSortType(sortKey)}
												>
													<span>{sortType[sortKey]}</span>
												</li>
											))}
										</ul>
									</li>
									<li>
										<span>Show</span>
										<span className="num_sorting_text">{currentFilter.productPerPage}</span>
										<i className="fa fa-angle-down" />
										<ul className="sorting_num">
											<li className="num_sorting_btn" onClick={() => onChangeProductPerPage(6)}>
												<span>6</span>
											</li>
											<li className="num_sorting_btn" onClick={() => onChangeProductPerPage(12)}>
												<span>12</span>
											</li>
											<li className="num_sorting_btn" onClick={() => onChangeProductPerPage(24)}>
												<span>24</span>
											</li>
										</ul>
									</li>
								</ul>
								<div className="pages d-flex flex-row align-items-center">
									<div className="page_current">
										<span>{currentFilter.currentPage}</span>
										<ul className="page_selection">
											{pageList.map(page => (
												<li key={page} onClick={() => onChangeCurrentPage(page)}>
													{page}
												</li>
											))}
										</ul>
									</div>
									<div className="page_total">
										<span>of</span> {totalPage}
									</div>
									<div
										id="next_page"
										className="page_next"
										onClick={() =>
											onChangeCurrentPage(currPage < totalPage ? currPage + 1 : currPage)
										}
									>
										<i className="fa fa-long-arrow-right" aria-hidden="true" />
									</div>
								</div>
							</div>

							{/* Product List */}
							<div
								className="product-grid"
								style={{ height: Math.ceil(productList.lenght / 4) * 360 + 'px' }}
							>
								{productList.map(product => (
									<ProductItem
										key={product.id}
										product={product}
										addProductToCart={addProductToCart}
									/>
								))}
							</div>

							{/* BottomPageProductSorting */}
							<div className="product_sorting_container product_sorting_container_bottom clearfix">
								<ul className="product_sorting">
									<li>
										<span>Show:</span>
										<span className="num_sorting_text">{currentFilter.currentPage}</span>
										<i className="fa fa-angle-down" />
										<ul className="sorting_num">
											{pageList.map(page => (
												<li
													key={page}
													className="num_sorting_btn"
													onClick={() => onChangeCurrentPage(page)}
												>
													<span>{page}</span>
												</li>
											))}
										</ul>
									</li>
								</ul>
								<span className="showing_results">
									Showing page {currentFilter.currentPage} – {currentFilter.productPerPage} of{' '}
									{currentFilter.totalProduct} results
								</span>
								<div className="pages d-flex flex-row align-items-center">
									<div className="page_current">
										<span>{currentFilter.currentPage}</span>
										<ul className="page_selection">
											{pageList.map(page => (
												<li key={page} onClick={() => onChangeCurrentPage(page)}>
													{page}
												</li>
											))}
										</ul>
									</div>
									<div className="page_total">
										<span>of</span> {totalPage}
									</div>
									<div
										id="next_page_1"
										className="page_next"
										onClick={() =>
											onChangeCurrentPage(currPage < totalPage ? currPage + 1 : currPage)
										}
									>
										<i className="fa fa-long-arrow-right" aria-hidden="true" />
									</div>
								</div>
							</div>
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

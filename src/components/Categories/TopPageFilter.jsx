import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TopPageFilter extends PureComponent {
	render() {
        const sortType = {
			default: 'Default Sorting',
			salePrice: 'Price',
			name: 'Product name'
        };
        const { currentFilter, onChangeSortType, onChangeProductPerPage, onChangeCurrentPage } = this.props;
        let pageList = [];
        const totalPage = Math.ceil(currentFilter.totalProduct / currentFilter.productPerPage);
		for (let nPage = 1; nPage <= totalPage; nPage++) {
			pageList.push(nPage);
        }
		const currPage = currentFilter.currentPage;
		return (
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
						onClick={() => onChangeCurrentPage(currPage < totalPage ? currPage + 1 : currPage)}
					>
						<i className="fa fa-long-arrow-right" aria-hidden="true" />
					</div>
				</div>
			</div>
		);
	}
}

TopPageFilter.propTypes = {};

export default TopPageFilter;

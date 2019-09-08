import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BottomPageFilter extends PureComponent {
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
                    <span>of</span> {totalPage?totalPage:1}
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
        );
    }
}

BottomPageFilter.propTypes = {

};

export default BottomPageFilter;
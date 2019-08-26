import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductSort extends PureComponent {
	render() {
		const { filterList, currentFilter, onChangeFilter } = this.props;
		const categoriesClass =
			'grid_sorting_button button d-flex flex-column justify-content-center align-items-center';

		return (
			<div className="new_arrivals_sorting">
				<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
					<li
						key="all"
						className={`${categoriesClass} ${currentFilter === 'all' ? 'active is-checked' : ''}`}
						onClick={() => onChangeFilter('all')}
					>
						all
					</li>
					{filterList.map((categories) => (
						<li
							key={categories.id}
							className={`${categoriesClass} ${
								currentFilter === categories.id ? 'active is-checked' : ''
							}`}
							onClick={() => onChangeFilter(categories.id)}
						>
							{' '}
							{categories.name}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

ProductSort.propTypes = {};

export default ProductSort;

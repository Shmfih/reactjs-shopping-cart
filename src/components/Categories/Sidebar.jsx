import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import InputRange from 'react-input-range';
import { toTitleCase } from '../../common_function';

class Sidebar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			sliderValue: this.props.currentFilter.priceRange
		};
	}

	handleSliderChangeValue = newValue => {
		this.setState({ sliderValue: newValue });
	};
	render() {
		const { categoriesList, currentFilter, onChangeCategories, onSliderChangeValue } = this.props;
		// Covert quick categories into array
		const categoriesArray = Object.entries(categoriesList);
		const selectedIndicator = (
			<span>
				<i className="fa fa-angle-double-right" aria-hidden="true" />
			</span>
		);
		return (
			<div className="sidebar">
				<div className="sidebar_section">
					<div className="sidebar_title">
						<h5>Product Category</h5>
					</div>
					<ul className="sidebar_categories">
						<li
							className={currentFilter.currentCategories === '' ? 'active' : ''}
							key="all"
							onClick={() => onChangeCategories('')}
						>
							<NavLink to="/shop">
								{currentFilter.currentCategories === '' && selectedIndicator}All
							</NavLink>
						</li>

						{categoriesArray.map(categories => (
							<li
								className={categories[0] === currentFilter.currentCategories ? 'active' : ''}
								key={categories[0]}
								onClick={() => onChangeCategories(categories[0])}
							>
								<NavLink to={`/shop?categories=${categories[0]}`}>
									{categories[0] === currentFilter.currentCategories && selectedIndicator}
									{toTitleCase(categories[0])}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Slider bar */}
				<div className="sidebar_section">
					<div className="sidebar_title">
						<h5>Filter by Price</h5>
					</div>
					<div id="amount">
						${this.state.sliderValue.min} - ${this.state.sliderValue.max}
					</div>
					<div id="slider-range">
						<InputRange
							maxValue={1000}
							minValue={0}
							value={this.state.sliderValue}
							onChange={value => this.handleSliderChangeValue(value)}
						/>
					</div>
					<div className="filter_button" onClick={() => onSliderChangeValue(this.state.sliderValue)}>
						<span>filter</span>
					</div>
				</div>
			</div>
		);
	}
}

Sidebar.propTypes = {};

export default Sidebar;

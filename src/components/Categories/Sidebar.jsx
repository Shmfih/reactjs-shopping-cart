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

	onChangeCategories = newCategories => {
		const { currentFilter, onChangeCurrentFilter } = this.props;
		const newFilter = {
			...currentFilter,
			currentPage: 1,
			currentCategories: newCategories === 'default' ? '' : newCategories
		};
		onChangeCurrentFilter(newFilter);
	};

	onSliderChangeValue = newValue => {
		const { currentFilter, onChangeCurrentFilter } = this.props;
		const newFilter = {
			...currentFilter,
			priceRange: newValue
		};
		onChangeCurrentFilter(newFilter);
	};


	handleSliderChangeValue = newValue => {
		this.setState({ sliderValue: newValue });
	};
	render() {
		const { categoriesList, currentFilter } = this.props;
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
							onClick={() => this.onChangeCategories('')}
						>
							<NavLink to="./shop">
								{currentFilter.currentCategories === '' && selectedIndicator}All
							</NavLink>
						</li>

						{categoriesArray.map(categories => (
							<li
								className={categories[0] === currentFilter.currentCategories ? 'active' : ''}
								key={categories[0]}
								onClick={() => this.onChangeCategories(categories[0])}
							>
								<NavLink to={`./shop?categories=${categories[0]}`}>
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
					<div className="filter_button" onClick={() => this.onSliderChangeValue(this.state.sliderValue)}>
						<span>filter</span>
					</div>
				</div>

				<div className="sidebar_section">
					<div className="sidebar_title">
						<h5>Sizes</h5>
					</div>
					<ul className="checkboxes active">
						<li>
							<i className="fa fa-square-o" aria-hidden="true" />
							<span>S</span>
						</li>
						<li className="active">
							<i className="fa fa-square" aria-hidden="true" />
							<span>M</span>
						</li>
						<li>
							<i className="fa fa-square-o" aria-hidden="true" />
							<span>L</span>
						</li>
						<li>
							<i className="fa fa-square-o" aria-hidden="true" />
							<span>XL</span>
						</li>
						<li>
							<i className="fa fa-square-o" aria-hidden="true" />
							<span>XXL</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

Sidebar.propTypes = {};

export default Sidebar;

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import postApi from '../../../api/postApi';
import ProductList from './ProductList/ProductList';
import productApi from '../../../api/productApi';
import '../NewArrival/NewArrival.scss';
import ProductSort from './ProductSort';
import categoriesApi from '../../../api/categoriesApi';

class NewArrival extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			productList: [],
			filterList: [],
			currentFilter: 'all',
			postLoading: true
		};
	}

	async componentDidMount() {
		try {
			const { currentFilter } = this.state;

			const response = await this.getNewArrivalList(currentFilter);

			// Get categories list
			const categoriesList = await categoriesApi.getAll();
			const filterList = categoriesList.body;
			// Set state
			this.setState({ filterList, postLoading: false });
		} catch (error) {
			console.log('Failed to load post list: ', error.message);
		}
	}

	getNewArrivalList = async (categoriesFilter) => {
		try {
			let filter = {
				limit: 10,
				skip: 0,
				order: 'date desc'
			};
			if (!(categoriesFilter === 'all')) {
				filter = {
					...filter,
					where: {
						categoryId: categoriesFilter
					}
				};
			}
			// Get product list
			const params = {
				filter: JSON.stringify(filter)
			};

			const response = await productApi.getAll(params);
			const { body: productList } = response;
			this.setState({ productList, postLoading: false });
		} catch (error) {
			console.log('Failed to load post list: ', error.message);
		}
	};

	handleChangleFilter = (categoriesId) => {
		this.setState({ currentFilter: categoriesId });
		this.getNewArrivalList(categoriesId);
	};

	render() {
		const { productList, filterList, currentFilter, postLoading } = this.state;
		if (postLoading) return 'Loading...';
		return (
			<div>
				<div className="new_arrivals">
					<div className="container">
						<div className="row">
							<div className="col text-center">
								<div className="section_title new_arrivals_title">
									<h2>New Arrivals</h2>
								</div>
							</div>
						</div>
						<div className="row align-items-center">
							<div className="col text-center">
								<ProductSort
									filterList={filterList}
									currentFilter={currentFilter}
									onChangeFilter={this.handleChangleFilter}
								/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								{/* Product */}
								<ProductList productList={productList} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewArrival;

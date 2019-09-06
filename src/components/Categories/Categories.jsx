import React, { PureComponent } from 'react';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
import MainProductsContent from './MainProductsContent';
import Sidebar from './Sidebar';
import './Categories.scss';
import '../../styles/categories_responsive.css';
import productApi from '../../api/productApi';
import categoriesApi from '../../api/categoriesApi';
import { makeParamsURL } from '../../common_function';
import Benefit from './Benefit/Benefit';

class Categories extends PureComponent {
	constructor(props) {
		super(props);
		// Get params from url
		const urlParams = new URLSearchParams(this.props.location.search);
		const initPage = Number(urlParams.get('page'));
		const initShow = Number(urlParams.get('show'));
		const initSort = urlParams.get('sort');
		const initFromPrice = Number(urlParams.get('fromPrice'));
		const initToPrice = Number(urlParams.get('toPrice'));
		const initCategories = urlParams.get('categories');

		// Set init state
		this.state = {
			currentFilter: {
				currentCategories: initCategories ? initCategories : '',
				sortBy: initSort ? initSort : '',
				productPerPage: initShow ? initShow : 6,
				currentPage: initPage ? initPage : 1,
				totalProduct: 0,
				priceRange: {
					min: initFromPrice ? initFromPrice : 300,
					max: initToPrice ? initToPrice : 750
				}
			},
			productList: [],
			quickCategories: {},
			productLoading: true
		};
	}

	// Get quick categories list, return an object like { categoryName: catgoriesId }
	// for quick rendering
	getQuickCategoriesList = async () => {
		try {
			const categoriesRequest = await categoriesApi.getAll();
			const categoriesList = categoriesRequest.body;
			const quickCategories = {};
			categoriesList.forEach(categories => {
				const quickCat = { [categories.name]: categories.id };
				Object.assign(quickCategories, quickCat);
			});
			this.setState({
				quickCategories
			});
		} catch (error) {
			console.log(error);
		}
	};

	// Get productList by filter
	getProductList = async requestFilter => {
		try {
			// Prepair params for getting product list
			const { currentCategories, sortBy, productPerPage, currentPage, priceRange } = requestFilter;
			let filter = {
				limit: productPerPage,
				skip: productPerPage * (currentPage - 1),
				order: `${sortBy === '' ? '' : sortBy + ' '}desc`,
				where: {
					salePrice: {
						between: [priceRange.min, priceRange.max]
					}
				}
			};
			// If currentCategories is undefined - get all product
			// otherwise, get product by provided category.
			if (!!currentCategories) {
				filter = {
					...filter,
					where: {
						...filter.where,
						categoryId: this.state.quickCategories[currentCategories]
					}
				};
			}

			const getProductListParams = {
				filter: JSON.stringify(filter)
			};
			const productListResponse = await productApi.getAll(getProductListParams);
			const { body: productList } = productListResponse;
			const totalProduct = productListResponse.pagination.total;
			this.setState({
				currentFilter: { ...this.state.currentFilter, totalProduct },
				productList,
				productLoading: false
			});
		} catch (error) {
			console.log('Failed to load post list: ', error.message);
		}
	};

	componentDidMount = async () => {
		try {
			await this.getQuickCategoriesList();
			await this.getProductList(this.state.currentFilter);
		} catch (error) {
			console.log('Failed to load post list: ', error.message);
		}
	};

	// Change filter functions

	handleChangeCurrentFilter = newFilter => {
		const newState = {
			...this.state,
			currentFilter: newFilter,
			productLoading: true,
		};
		this.setState(newState);
		this.getProductList(newState.currentFilter);
		this.props.history.push(makeParamsURL(newState.currentFilter));
	};

	render() {
		const { currentFilter, productList, quickCategories, productLoading } = this.state;
		const currCategories = currentFilter.currentCategories;
		const breadCrumbsPath = [
			['Categories', '/shop'],
			[currCategories ? currCategories : 'All', `/shop${currCategories ? `?categories=${currCategories}` : ''}`]
		];
		return (
			<>
				<div className="container product_section_container">
					<div className="row">
						<div className="col product_section clearfix">
							<Breadcrumbs breadCrumbsPath={breadCrumbsPath} />
							<Sidebar
								categoriesList={quickCategories}
								currentFilter={currentFilter}
								onChangeCurrentFilter={this.handleChangeCurrentFilter}
							/>
							<MainProductsContent
								productList={productList}
								currentFilter={currentFilter}
								onChangeCurrentFilter={this.handleChangeCurrentFilter}
								productLoading={productLoading}
							/>
						</div>
					</div>
				</div>
				<Benefit />
			</>
		);
	}
}

Categories.propTypes = {};

export default Categories;

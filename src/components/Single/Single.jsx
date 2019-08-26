import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail/ProductDetail';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
import productApi from '../../api/productApi';
import './Single.scss';
import Tabs from './Tabs/Tabs';
import Benefit from '../Categories/Benefit/Benefit';
import categoriesApi from '../../api/categoriesApi';

class Single extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			productDetail: {},
			loading: true,
			categoriesList: {}
		};
	}

	getQuickCategoriesList = async () => {
		try {
			const categoriesList = {};
			const response = await categoriesApi.getAll();
			response.body.forEach(categories => {
				const quickCategories = { [categories.name]: categories.id };
				Object.assign(categoriesList, quickCategories);
			});
			return categoriesList;
		} catch (error) {
			console.log(error);
		}
	};

	async componentDidMount() {
		try {
			const response = await productApi.getDetail(this.props.match.params.id);
			const productDetail = response.body;
			const categoriesList = await this.getQuickCategoriesList();
			this.setState({ productDetail, categoriesList, loading: false });
		} catch (error) {
			console.log(error);
		}
	}

	getKeyByValue = (object, value) => {
		return Object.keys(object).find(key => object[key] === value);
	};

	render() {
		const { loading, productDetail, categoriesList } = this.state;
		if (loading) return <p>Loading...</p>;

		// Give breadcrumbs a path to render
		const categoryName = this.getKeyByValue(categoriesList, productDetail.categoryId);
		const breadCrumbsPath = [
			['All products', '/shop'],
			[categoryName, `/shop?categories=${categoryName}`],
			[productDetail.name, `/product/${productDetail.id}`]
		];

		return (
			<div className="super_container">
				<div className="container single_product_container">
					<div className="row">
						<div className="col">
							<Breadcrumbs breadCrumbsPath={breadCrumbsPath} />
						</div>
					</div>
					<div className="row">
						<ProductDetail product={productDetail} />
					</div>
				</div>
				<Tabs />
				<Benefit />
			</div>
		);
	}
}

Single.propTypes = {};

export default Single;

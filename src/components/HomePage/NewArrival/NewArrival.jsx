import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem/ProductItem';
import postApi from '../../../api/postApi';
import ProductList from './ProductList/ProductList';
import productApi from '../../../api/productApi';


export default class NewArrival extends Component {

  constructor (props) {
    super(props);
    this.state = {
        productList: [],
        isLoading: true,
      };
  }

  async componentDidMount() {
    try {
      const filter = {
        limit: 10,
        skip: 0,
        order: 'name desc',
        where: {
          //categoryId: "5b822e7f9c300309b7e9befc",
        }
      };

      const params = {
        filter: JSON.stringify(filter),
      }
      const response = await productApi.getAll(params);
      // const productList = response.data;
      const { body: productList } = response;
      this.setState({ productList, postLoading: false });
      console.log(productList);
    } catch (error) {
      console.log('Failed to load post list: ', error.message);
    }
  }


  render() {
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
                <div className="new_arrivals_sorting">
                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked" data-filter="*">all</li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".women">women's</li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".accessories">accessories</li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center" data-filter=".men">men's</li>
                </ul>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col">
                
                {/* Product */}
                <ProductList productList={this.state.productList}/>

            </div>
            </div>
        </div>
        </div>

      </div>
    )
  }
}

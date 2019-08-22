import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail/ProductDetail';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
import productApi from '../../api/productApi';
import './Single.scss';
import Tabs from './Tabs/Tabs';
import Benefit from '../Categories/Benefit/Benefit';


class Single extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            productDetail: {},
            loading: true,
        };
    }

    async componentDidMount(){
        const response = await productApi.getDetail(this.props.match.params.id);
        const productDetail = response.body;
        this.setState({ productDetail, loading: false });
    }

    render() {
        const { loading, productDetail } = this.state;
        if (loading) return <p>Loading post...</p>;
        return (
            <div>
                {/* <div className="super_container"> */}
                    {/* Header */}
                <div className="container single_product_container">
                    <div className="row">
                        <div className="col">
                            {/* Breadcrumbs */}
                            <Breadcrumbs />
                        </div>
                        </div>
                        {/* Product information */}
                        <div className="row">
                        <ProductDetail product={productDetail}/>
                        </div>
                    </div>
                    {/* Tabs */}
                    <Tabs />
                    {/* Benefit */}
                    <Benefit />
            </div>
        );
    }
}

Single.propTypes = {
    
};

export default Single;
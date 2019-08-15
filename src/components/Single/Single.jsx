import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import '../../styles/single_styles.css';
// import '../../styles/single_responsive.css';
import ProductDetail from './ProductDetail/ProductDetail';
import Breadcrumbs from '../Shared/Breadcrumbs/Breadcrumbs';
import productApi from '../../api/productApi';
//import '../Single/Single.scss';
import '../HomePage/HomePage.scss';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
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
        console.log("Paerfsajbfjewf",this.props.match);
        const productDetail = response.body;
        this.setState({ productDetail, loading: false });
    }

    render() {
        console.log(this.state);
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
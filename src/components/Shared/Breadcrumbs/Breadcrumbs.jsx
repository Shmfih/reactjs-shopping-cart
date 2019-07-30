import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Breadcrumbs extends PureComponent {
    render() {
        return (
            <div>
                <div className="breadcrumbs d-flex flex-row align-items-center">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true" />Men's</a></li>
                    </ul>
                    </div>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;
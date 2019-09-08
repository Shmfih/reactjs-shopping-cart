import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Loading.scss';

class Loading extends PureComponent {
	render() {
		return (
			<div class="loading">
				<img src="/images/loading.gif" />
				<span>Loading, please wait...</span>
			</div>
		);
	}
}

Loading.propTypes = {};

export default Loading;

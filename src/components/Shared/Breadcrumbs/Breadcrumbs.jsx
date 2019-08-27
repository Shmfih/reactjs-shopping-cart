import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { toTitleCase } from '../../../common_function';

class Breadcrumbs extends PureComponent {

	render() {
		const { breadCrumbsPath } = this.props;
		// console.log(this.props);
		return (
			<div className="breadcrumbs d-flex flex-row align-items-center">
				<ul>
					<li>
						<NavLink to="./">Home</NavLink>
					</li>
					{breadCrumbsPath.map((item, idx) => (
						<li key={idx} className={idx === breadCrumbsPath.length - 1 ? 'active' : ''}>
							<NavLink to={item[1]}>
								<i className="fa fa-angle-right" aria-hidden="true" />
								{toTitleCase(item[0])}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

Breadcrumbs.propTypes = {

};

export default Breadcrumbs;
